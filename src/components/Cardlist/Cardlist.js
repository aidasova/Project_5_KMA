import React, { Component } from 'react';
import './Cardlist.css';
import store from '../../reducer/store';
import Card from '../Card/Card';

class Cardlist extends Component {
  state = { 
    cardlist: [],
    text: ''
}
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
            <div>
              {this.state.cardlist.map(item => (
                <Card key={item.id} {...item} />
              ))}
             
          </div>
        );
    } 

}
export default Cardlist;