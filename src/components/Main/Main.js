import React, { Component } from 'react';
import store from '../../reducer/store';
import { Link } from 'react-router-dom';
import './Main.css';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
           // cardlist: []
        };
    }
   
    componentDidMount() {
        store.subscribe(() => {
          let globalState = store.getState();
          //обновить лок.состояние, чтобы компонент перерендерился
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
        e.preventDefault();
        console.log(this.state)
       // const input =  this.state
        }
    
    render() { 
        return (
    
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
                    <Link to={'/1'}  className="btn_add">ADD</Link>
                    {/* <button type="button" className="add" onClick={this.buttonClick} disabled={!text}>ADD</button> */}
                </div>
            </div>
        );
    }
}
export default Main;