import React, { Component } from 'react';
import store from '../../reducer/store';
import { Link } from 'react-router-dom';
import './Main.css';
import {addPurpose} from '../action/CardAction';

// Основной класс
class Main extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            text: '',
        };
    }
   
    componentDidMount() {
        store.subscribe(() => {
          let globalState = store.getState();
          this.setState ({
            cardlist: globalState.cardlist
          })
        })
      }
    changeHandler = (e) => {
        console.log(e.target.value)
        let inputText = e.target.value
        this.setState({
            text: inputText,
        });
        console.log(e.target.value)
    }
       
    buttonClick = (e) => {
       // e.preventDefault();
        console.log(this.state)
        const dataPurpose =  this.state
        store.dispatch({
            type: addPurpose,
            payload:  dataPurpose,//отправили в редьюсер
        })
        }
    
    render() { 
        const {inputText, requiredAmount, targetTerm, startingAmount, depositInterest } = this.props
        return (
            <div>
            <div className="form_main">
                <h3 className="title">Мои цели</h3>
                <div className="block_input">
                    <input 
                        value={this.state.text}
                        name='input'
                        className="input_main" 
                        placeholder="добавить цель"
                        type="text"
                        onChange={this.changeHandler}
                        />
                    <Link to={'/1'} onClick={()=>this.buttonClick()} className="btn_add">ADD</Link>
                </div>
            </div>
      
            </div>
        )
           
    }
}
export default Main;