import React, { Component } from 'react';
import './Limit.css';

class Limit extends Component {

    constructor() {
        super();
        this.state = {
          requiredAmount: "",
          targetTerm: "",
          startingAmount: "",
          depositInterest: ""
        };
      }
    
      handlerChange = (event) => {
        let name = event.target.name; //получаем название поля
        let value = event.target.value; // получаем значение поля
  
        this.setState({ [name]: value });
        console.log({ [name]: value });
    
      };
    
      handlerSubmit(event) {
        event.preventDefault();
        if (event.target.value === "") {
          console.log("Карточка зарегистрирована");
        } else {
          console.log("Вы не заполнили поля");
        }
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
                        />
                    </label>

                    <label>
                        <input
                        name="targetTerm"
                        type="number"
                        value={this.state.targetTerm}
                        onChange={this.handlerChange}
                        />
                    </label>

                    <label>
                        <input
                        name="startingAmount"
                        type="number"
                        value={this.state.startingAmount}
                        onChange={this.handlerChange}
                        />
                    </label>

                    <label>
                        <input
                        name="depositInterest"
                        type="number"
                        value={this.state.depositInterest}
                        onChange={this.handlerChange}
                        />
                    </label>
                <input type="submit" value="Создать цель" />
                </form>
            </div>
        );
    }
}
 
export default Limit;