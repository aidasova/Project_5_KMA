import React, { Component } from 'react';
import './Cardlist.css';
import store from '../../reducer/store';
import { Link } from 'react-router-dom';
import { deleted } from '../action/CardAction';

class Cardlist extends Component {
  constructor() {
    super()
      this.state = {
        cardlist: [],
        id: ''
    }
  }
componentDidMount() {
    let globalState = store.getState();
    console.log(globalState)
    this.setState ({
    cardlist: globalState.cardlist
  })
  store.subscribe(() => {
    let globalState = store.getState();
    this.setState ({
      cardlist: globalState.cardlist
    })
  })
}
buttonClick = (e) => {
   console.log(this.state)
  }
deleteClick = (id) => {
    console.log(id)    
     store.dispatch({
         type: deleted,
         payload: id
     })
}
    render() {    
        return (
            <div className="purpose_items">
                {this.state.cardlist.map(item => (
                  <div className="purpose">
                    <div className="purpose_title" key={item.id}>{item.nameTarget}</div>
                    <div className="btn_purpose_item" onClick={()=>this.deleteClick(item.id)}>X</div>
                    <Link to={'/purpose/' + item.id} onClick={()=>this.buttonClick()} className="btn_add_item"></Link>
                  </div>
                ))}
            </div>
        );
    } 
  }

export default Cardlist;