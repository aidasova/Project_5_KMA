import React, { Component } from 'react';
import './Cardlist.css';
import store from '../../reducer/store';
import { Link } from 'react-router-dom';
//import {deletePurpose} from '../action/CardAction';

class Cardlist extends Component {
state = {
  cardlist: []
}
componentDidMount() {
    let globalState = store.getState();
    console.log(globalState)
    this.setState ({
    cardlist: globalState.cardlist
  })
}
buttonClick = (e) => {
  //e.preventDefault();
   console.log(this.state)
   const text =  this.state
   
  }
  // deleteClick (id)  {  
  //   console.log(this.state)
  //   const text =  this.state
  //   store.dispatch({
  //     type: deletePurpose,
  //     payload:  item.id,//отправили в редьюсер
  // })
  // }
    render() {  
     
        return (
          <div>
            <div className="purpose_items">
                {this.state.cardlist.map(item => (
              <div className="purpose">
                  <div className="purpose_title" key={item.id}>{item.text}</div>
                  <div className="btn_purpose_item" onClick={()=>this.deleteClick(item.id)}>X</div>
                  <Link to={'/:' + this.state.id} onClick={()=>this.buttonClick()} className="btn_add_item"></Link>
              </div>
              ))}
          </div>
          </div>
        );
    } 

}
export default Cardlist;