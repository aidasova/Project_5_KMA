import React, { Component } from 'react';
import './Limit.css';
import { Link } from 'react-router-dom';
import store from '../../reducer/store';

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
      componentDidMount() {
        store.subscribe(() => {
            const globalState = store.getState(); //получить данные из глобального состояния
            this.setState({   //обновить локальное состояние
                cardlist: globalState.cardlist
            })
        })
    }
      handlerChange = (event) => {
        let name = event.target.name; //получаем название поля
        let value = event.target.value; // получаем значение поля
  
        this.setState({ [name]: value });
        console.log({ [name]: value });
    
      };
    
      onSubmit(event) {
        event.preventDefault();
        
      }

    render() { 
        return (
            <div className="purpose_made">
                
                <form onSubmit={this.onSubmit}>
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
                <input 
                  type="submit" 
                  value="Создать цель" 
                  />
                   <Link to={'/' }  className="btn">ADD</Link>
                </form>
            </div>
        );
    }
}
 
export default Limit;