import React, { Component } from 'react';
import './Cardlist.css';
import store from '../../reducer/store';
import { Link } from 'react-router-dom';

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
    render() {  
        return (
          <div>
            <div className="purpose_items">
                {this.state.cardlist.map(item => (
              <div className="purpose">
                  <div className="purpose_title" key={item.id}>{item.text}</div>
                  <div className="btn_purpose_item">X</div>
                  <Link to={'/:' + this.state.id} onClick={()=>this.buttonClick()} className="btn_add_item"></Link>
              </div>
              ))}
          </div>
          </div>
        );
    } 

}
export default Cardlist;