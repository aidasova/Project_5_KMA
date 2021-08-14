import React, { Component } from 'react';
import './Cardlist.css';
import store from '../../reducer/store';

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
//ghh
    render() {  
     // console.log(this.props.text)
        return (
          <div>
            <div className="purpose_items">
              <div className="purpose">
                <div className="purpose_title">Car</div>
                <div className="btn_purpose_item">X</div>
              </div>
              <div className="purpose">
                <div className="purpose_title">House</div>
                <div className="btn_purpose_item">X</div>
              </div>
              <div className="purpose">
                <div className="purpose_title">Phone</div>
                <div className="btn_purpose_item">X</div>
              </div>
        
       
                {/* {this.state.cardlist.map(item => (
              <div className="purpose">
                  <div className="purpose_title" key={item.text}></div>
                  <div className="btn_purpose_item">X</div>
              </div>
              ))} */}
          </div>
          </div>
        );
    } 

}
export default Cardlist;