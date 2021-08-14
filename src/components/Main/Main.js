import React, { Component } from 'react';
import store from '../../reducer/store';
import { Link } from 'react-router-dom';
import './Main.css';
import {input} from '../action/CardAction';

// Основной класс
class Main extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
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
        const text =  this.state
        store.dispatch({
            type: input,
            payload: text,//отправили в редьюсер
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
<<<<<<< HEAD
                    <Link to={'/1'} onClick={()=>this.buttonClick()} className="btn_add">ADD</Link>
                </div>
            </div>
      
=======
                    <Link to={'/1'}  className="btn_add">ADD</Link>
                    {/* <button type="button" className="add" onClick={this.buttonClick} disabled={!text}>ADD</button> */}
                </div>
>>>>>>> ca41811ff3b25bbf283cdfc63851201f6230b9d8
            </div>
        )
           
    }
}
export default Main;