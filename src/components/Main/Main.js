import React, { Component } from 'react';
import store from '../../reducer/store';
import { input } from '../action/CardAction';
import './Main.css';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            cardlist: [],
        };
    }
    componentDidMount() {
        let globalState = store.getState();
        console.log(globalState);
        this.setState({cardlist: globalState.cardlist});
      }
    componentDidMount() {
        store.subscribe(() => {
          //получить данные из глоб.состояния
          let globalState = store.getState();
          //обновить лок.состояние, чтобы компонент перерендерился
          this.setState ({
            cardlist: globalState.card
          })
        });
      }
    changeHandler = (e) => {
        this.setState({text: e.target.value});
    }
    addPurpose (id) {
        store.dispatch({
            type: input, 
            cardId: id
          });

        
       // e.preventDefault();
        }
    
    render() { 

        return (
    
            <div className="form_main">
                <h3>Мои цели</h3>
                <form onSubmit={this.onSubmit}>
                    <label>
                    <input 
                        key={id}
                        value={this.state.text}
                        className="input_main" 
                        placeholder="добавить цель"
                        type="text"
                        onChange={this.changeHandler}
                        />
                        </label>
                    {/* <button type="submit" className="button_main"> */}
                   <button onClick={() => this.addPurpose (id)}>
                        ADD
                    </button>
                </form>
               
            </div>
        );
    }
}
export default Main;