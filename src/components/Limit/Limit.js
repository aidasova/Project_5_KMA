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
        };
      }
    
      handlerChange = (event) => {
        let name = event.target.name; //получаем название поля
        let value = event.target.value; // получаем значение поля
  
        this.setState({ 
          [name]: value,
          taskResult: this.resultInput(name, value)
        });
        // console.log(this.state);

      };
    
      handlerSubmit(event) {
        event.preventDefault();
        if (event.target.value === "") {
          console.log("Карточка зарегистрирована");
        } else {
          console.log("Вы не заполнили поля");
        }
      }

      resultInput(name, value) {
        let data = {...this.state, [name]: value}
        console.log(data)
      }

    render() { 
        return (
            <div className="purpose_made">
                
                <form onSubmit={this.handlerSubmit}>
                    <label>
                        <input
                        name="requiredAmount"
                        type="text"
                        value={this.state.requiredAmount}
                        onChange={this.handlerChange}
                        placeholder="Необходимая сумма"
                        />
                    </label>

                    <label>
                        <input
                        name="targetTerm"
                        type="number"
                        value={this.state.targetTerm}
                        onChange={this.handlerChange}
                        placeholder="Срок достижения"
                        />
                    </label>

                    <label>
                        <input
                        name="startingAmount"
                        type="number"
                        value={this.state.startingAmount}
                        onChange={this.handlerChange}
                        placeholder="Стартовая сумма"
                        />
                    </label>

                    <label>
                        <input
                        name="depositInterest"
                        type="number"
                        value={this.state.depositInterest}
                        onChange={this.handlerChange}
                        placeholder="Процент по вкладу"
                        />
                    </label>

                    <label>
                        <input
                        name="taskResult"
                        type="text"
                        value={this.state.taskResult}
                        />
                    </label>
                <input type="submit" value="Создать цель" />
                <button>Вернуться назад</button>
                </form>
            </div>
        );
    }
}
 
export default Limit;