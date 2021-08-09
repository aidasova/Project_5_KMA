import React, { Component } from 'react';
import './Cards.css';
import store from '../../reducer/store';

class Cards extends Component {
  
   componentDidMount() {
    let globalState = store.getState();
    //console.log(globalState);
    this.setState({cardlist: globalState.cardlist});
    store.subscribe(() => {
            //получить данные из глоб.состояния
            let globalState = store.getState();
            //обновить лок.состояние, чтобы компонент перерендерился
            this.setState ({
              cardlist: globalState.cardlist
            })
          });
  }
    render() {
    
        return (
            <ul className="list-group" id="purpose-list">
                {/* {this.props.limit.map((item) => (
                    <li className="cards__item" key={item.text}>
                       
                      
                    </li>
                ))} */}
               // asdasd
          </ul>
        );
    } 

}
export default Cards;