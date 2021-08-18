import React, { Component } from 'react';
import './Limit.css';
import { Link } from 'react-router-dom';
import store from '../../reducer/store';
import {add} from '../action/CardAction';

// Форма создания Цели *
class Limit extends Component {

    constructor() {
        super();
        this.state = {
          id: "",
          text: "",
          requiredAmount: "",
          targetTerm: "",
          startingAmount: "",
          depositInterest: "",
          taskResult: "",
          NameError: "",
          NameErrorSum: "",
          nameTarget: "",
          isValid: false,
        };
      }
     
      componentDidMount() {
            const globalState = store.getState(); 
            console.log(globalState)
            const maxId = globalState.cardlist.reduce((max, item) => item.id > max ? item.id : max, 0);
            console.log(maxId)
            this.setState({
              id: maxId
            })
            console.log(this.state)
          
            this.setState({  
                cardlist: globalState.cardlist
            })
    }
      checkAllInputsNotEpmty(newState)  {
        if (newState.requiredAmount === "") {
          return false
        } else if (newState.targetTerm === "") {
          return false
        } else if (newState.startingAmount === "") {
          return false
        } else if (newState.depositInterest === "") {
          return false
        } 
        return true
      }

      handlerChange = (event) => {
        let name = event.target.name; //получаем название поля
        let value = event.target.value ? Number(event.target.value) : ""; // получаем значение поля
        let newState = {...this.state, [name]: value};
        let initialValue = '';

        let inputsForSaveInitialValue = [
          'depositInterest'
        ];

        if (inputsForSaveInitialValue.includes(name)) {
          initialValue = value;
        }

        let allInputsNotEpmty = this.checkAllInputsNotEpmty(newState) 
        
        let requiredSumCorrect = newState.requiredAmount > newState.startingAmount;

        if (!isNaN(value)) {
          let monthlyPayment = 0;

          if (allInputsNotEpmty) {
            monthlyPayment = this.resultInput(newState);
          } 

          console.log(monthlyPayment)

          this.setState({ 
            [name]: initialValue ? initialValue : value,
            taskResult: monthlyPayment > 0 ? monthlyPayment : '',
            isValid: allInputsNotEpmty && newState.nameTarget !== "" && requiredSumCorrect ? true : false,
            NameError: monthlyPayment > 0 ? '' : 'Невозможно просчитать сумму платежа',
            NameErrorSum: !requiredSumCorrect ? "Сумма цели, меньше суммы вложенний" : ""
          });
        } else {
          this.setState({
            NameError: "Необходимо указывать числовые данные",
            isValid: false,
          })
        }
      };
      
      nameNewTarget = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let requiredSumCorrect = this.state.requiredAmount > this.state.startingAmount;

        if ( value !== '' ) {
            this.setState({
                [name]: value,
                isValid: this.checkAllInputsNotEpmty(this.state) && requiredSumCorrect ? true : false,
                NameErrorSum: !requiredSumCorrect ? "Сумма цели, меньше суммы вложенний" : ""
            });
        } else {
          this.setState({isValid: false, nameTarget: "",});
        }

      }

      handlerSubmit = (event, submit) => {
        event.preventDefault();
        console.log(this.state.id)
        console.log(this.state)
        // if (event.target.value === "") {
        //   console.log("Карточка зарегистрирована");
          let cardPart = this.state
        store.dispatch({
            type: add,
            payload: cardPart,//отправили в редьюсер
        })

        // } else {
        //   console.log("Вы не заполнили поля");
        // }
      }
      // https://law03.ru/kalkulyator/nakoplenij_deneg 
    
      resultInput(newState) {
        let persent = newState.depositInterest / 100; // Расчет процента
        let resultSum1 = newState.requiredAmount - newState.startingAmount * (1 + persent / 12)**newState.targetTerm;
        let resultsum2 = (1 + persent / 12)**newState.targetTerm - 1;
        let resultsum3 = persent / 12 * (resultSum1 / resultsum2);

        return resultsum3.toFixed(2);
      }

    render() { 
      return  (
            <div className="purpose_made">
              <div className="purpose_made_name">Параметры цели</div>
              <div className="error">{this.state.NameError}</div>
              <div className="error">{this.state.NameErrorSum}</div>
                <form className="form" onSubmit={this.handlerSubmit}>
                    <label>
                        <input
                        className="form_input"
                        name="requiredAmount"
                        type="text"
                        value={this.state.requiredAmount}
                        onChange={this.handlerChange}
                        placeholder="Необходимая сумма"
                        />
                    </label>
                    <label>
                        <input
                        className="form_input"
                        name="targetTerm"
                        type="text"
                        value={this.state.targetTerm}
                        onChange={this.handlerChange}
                        placeholder="Срок достижения(мес)"
                        />
                    </label>
                    <label>
                        <input
                        className="form_input"
                        name="startingAmount"
                        type="text"
                        value={this.state.startingAmount}
                        onChange={this.handlerChange}
                        placeholder="Стартовая сумма"
                        />
                    </label>
                    <label>
                        <input
                        className="form_input"
                        name="depositInterest"
                        type="text"
                        value={this.state.depositInterest}
                        onChange={this.handlerChange}
                        placeholder="Процент по вкладу"
                        />
                    </label>
                    <label>
                        <input
                        className="form_input"
                        name="taskResult"
                        type="text"
                        value={this.state.taskResult}
                        placeholder="Сумма ежемесячного пополнения"
                        />
                    </label>
                    <label>
                        <input
                        className="form_input"
                        name="nameTarget"
                        type="text"
                        value={this.state.nameTarget}
                        onChange={this.nameNewTarget}
                        placeholder="Название цели"
                        />
                    </label>
                <button type="submit" className="form_submit">Создать цель</button>
                </form>
                <Link to={'/'} className="form_btn_new">Создать новую цель</Link>
            </div>
        );
    }
}
 
export default Limit;