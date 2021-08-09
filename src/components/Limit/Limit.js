import React, { Component } from 'react';
import './Limit.css';

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
          isValid: false,
        };
      }
    
      handlerChange = (event) => {
        let name = event.target.name; //получаем название поля
        let initialValue = '';

        if (event.target.name === 'depositInterest') {
          initialValue = event.target.value;
        }

        let value = Number(event.target.value); // получаем значение поля

        // let allInputsFilled = ;
        console.log(event.target.value);
        console.log(value);
        
        if (!isNaN(value)) {
          this.setState({ 
            [name]: initialValue ? initialValue : value,
            taskResult: this.resultInput(name, value),
            NameError: "",
            isValid: true,
          });
        } else {
          this.setState({
            NameError: "Необходимо указывать числовые данные",
            isValid: false,
          })
        }
      };
    
      handlerSubmit(event) {
        event.preventDefault();
        if (event.target.value === "") {
          console.log("Карточка зарегистрирована");
        } else {
          console.log("Вы не заполнили поля");
        }
      }
      // https://law03.ru/kalkulyator/nakoplenij_deneg 
      resultInput(name, value) {
        let data = {...this.state, [name]: value};
        let persent = data.depositInterest / 100; // Расчет процента
        let resultSum1 = data.requiredAmount - data.startingAmount * (1 + persent / 12)**data.targetTerm;
        let resultsum2 = (1 + persent / 12)**data.targetTerm - 1;
        let resultsum3 = persent / 12 * (resultSum1 / resultsum2)
        return resultsum3.toFixed(2);
      }

    render() { 
        return (
            <div className="purpose_made">
              <div className="error">{this.state.NameError}</div>
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
                <button type="submit" className="buttonBox">Создать цель</button>
                <button className="buttonBox">Вернуться назад</button>
                </form>
            </div>
        );
    }
}
 
export default Limit;