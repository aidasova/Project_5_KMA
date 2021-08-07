import React, { Component } from 'react';
import './Cards.css';
import store from '../../reducer/store';
import Main from '../Main/Main';

class Cards extends Component {
   state = {
     cardlist: []
   }

   componentDidMount() {
    let globalState = store.getState();
    console.log(globalState);
    this.setState({cardlist: globalState.cardlist});
  }
    render() {
    
        return (
            <ul>
                {this.props.cardlist.map((item) => (
                    <li className="cards__item" key={item.id}>
                        {item.text}
                        <Main {...item} />
                    </li>
                ))}
          </ul>
        );
    } 

}
export default Cards;