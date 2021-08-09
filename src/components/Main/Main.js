import React, { Component } from 'react';
import store from '../../reducer/store';
import { input } from '../action/CardAction';
import './Main.css';
import Cards from '../Cards/Cards';


class Main extends Component {
    constructor() {
        super();
        this.state = {
            cardlist: [],
            text: '',
            newcard: {},
            showlist: false,
            id: ''
        };
    }
   
    componentDidMount() {
        store.subscribe(() => {
          //получить данные из глоб.состояния
          let globalState = store.getState();
          //обновить лок.состояние, чтобы компонент перерендерился
          this.setState ({
            cardlist: globalState.cardlist
          })
        });
       
      }
    changeHandler = (e) => {
        console.log(e.target.value)
        let inputText = e.target.value
        this.setState({
            text: inputText,
        });
        
    }
       
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        const input =  this.state
        store.dispatch({
            type: input ,
            payload: this.setState
          });

         
        }
    
    render() { 
        const { text } = this.state;
        return (
    
            <div className="form_main">
                <h3>Мои цели</h3>
                <form onSubmit={this.onSubmit}>
                    <label>
                    <input 
                        value={this.state.text}
                        name='input'
                        className="input_main" 
                        placeholder="добавить цель"
                        type="text"
                        onChange={this.changeHandler}
                        />
                        </label>
                     <button type="submit" className="button_main"> 
                        ADD
                    </button>
                 
                </form>
               
            </div>
        );
    }
}
export default Main;