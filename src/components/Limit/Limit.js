import React, { Component } from 'react';
import './Limit.css';

// Форма создания Цели *
class Limit extends Component {

    constructor() {
        super();
        this.state = {
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
        
        if (newState.requiredAmount < newState.startingAmount) {
          this.setState({NameErrorSum: "Сумма цели, меньше суммы вложенний", isValid: false,})
        } else {
          this.setState({NameErrorSum: ""})
        }

        if (!isNaN(value)) {
          this.setState({ 
            [name]: initialValue ? initialValue : value,
            taskResult: allInputsNotEpmty ? this.resultInput(newState) : '',
            isValid: allInputsNotEpmty && newState.nameTarget !== "" ? true : false,
            NameError: "",
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
        if ( value !== '' ) {
          this.setState({[name]: value,
            isValid: this.checkAllInputsNotEpmty(this.state) ? true : false,
          });
        } else {
          this.setState({isValid: false, nameTarget: "",});
        }
      }

      handlerSubmit(event) {
        event.preventDefault();
        if (event.target.value === "") {
          console.log("Карточка зарегистрирована");
        } else {
          console.log("Вы не заполнили поля");
        }
      }
      // https://law03.ru/kalkulyator/nakoplenij_deneg 

      resultInput(newState) {
        let persent = newState.depositInterest / 100; // Расчет процента
        let resultSum1 = newState.requiredAmount - newState.startingAmount * (1 + persent / 12)**newState.targetTerm;
        let resultsum2 = (1 + persent / 12)**newState.targetTerm - 1;
        let resultsum3 = persent / 12 * (resultSum1 / resultsum2);
        if (resultsum3 < 0) {
          return resultsum3 = '';
        } else {
          return resultsum3.toFixed(2);
        }
      }

    render() { 
        return (
            <div className="purpose_made">
              <div className="error">{this.state.NameError}</div>
              <div className="error">{this.state.NameErrorSum}</div>
                <form onSubmit={this.handlerSubmit}>
                    <label>
                        Сумма для достижения цели 
                        <input
                        name="requiredAmount"
                        type="text"
                        value={this.state.requiredAmount}
                        onChange={this.handlerChange}
                        placeholder="Необходимая сумма"
                        />
                    </label>
                    <label>
                        Количество месяцев
                        <input
                        name="targetTerm"
                        type="text"
                        value={this.state.targetTerm}
                        onChange={this.handlerChange}
                        placeholder="Срок достижения"
                        />
                    </label>
                    <label>
                        Начальная сумма вложений
                        <input
                        name="startingAmount"
                        type="text"
                        value={this.state.startingAmount}
                        onChange={this.handlerChange}
                        placeholder="Стартовая сумма"
                        />
                    </label>
                    <label>
                        Ежемесячное начисление процентов
                        <input
                        name="depositInterest"
                        type="text"
                        value={this.state.depositInterest}
                        onChange={this.handlerChange}
                        placeholder="Процент по вкладу"
                        />
                    </label>
                    <label>
                        Сумма ежемесячного пополнения
                        <input
                        name="taskResult"
                        type="text"
                        value={this.state.taskResult}
                        placeholder="Сумма ежемесячного платежа"
                        />
                    </label>
                    <label>
                        Имя цели
                        <input
                        name="nameTarget"
                        type="text"
                        value={this.state.nameTarget}
                        onChange={this.nameNewTarget}
                        placeholder="Название цели"
                        />
                    </label>
                <button type="submit" className="buttonBox" disabled={!this.state.isValid}>Создать цель</button>
                <button className="buttonBox">Вернуться назад</button>
                </form>
            </div>
        );
    }
}
 
export default Limit;