import React, { Component } from 'react';
import store from '../../reducer/store';
import { Link } from 'react-router-dom';
import './Main.css';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            cardlist: [],
            text: '',
            showlist: false,
            id: ''
        };
    }
   
    componentDidMount() {
          //получить данные из глоб.состояния
          let globalState = store.getState();
          //обновить лок.состояние, чтобы компонент перерендерился
          this.setState ({
            cardlist: globalState.cardlist
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
      //  e.preventDefault();
        console.log(this.state)
        const input =  this.state
        
        this.setState({
            showlist: true,
            //id: input
        })
        console.log(this.showlist)
        }
    
    render() { 
        const { text } = this.state;
        return (
    
            <div className="form_main">
                <h3>Мои цели</h3>
                {/* <form onSubmit={this.onSubmit}>
                    <label> */}
                    <input 
                        value={this.state.text}
                        name='input'
                        className="input_main" 
                        placeholder="добавить цель"
                        type="text"
                        onChange={this.changeHandler}
                        />
                        {/* </label> */}
                     {/* <button type="submit" className="button_main"> 
                        ADD
                    </button> */}
                    {this.state.showList
                    ? <Link to={'/1'}  className="btn">FORM</Link>
                    : <button type="button" className="add" onClick={this.buttonClick} disabled={!text}>ADD</button>
                }
                {/* </form>
                */}
            </div>
        );
    }
}
export default Main;