import React, { Component } from 'react';
import './Cardlist.css';
import store from '../../reducer/store';

class Cardlist extends Component {
state = {
  cardlist: []
}
<<<<<<< HEAD
componentDidMount() {
  let globalState = store.getState();
  console.log(globalState)
  this.setState ({
    cardlist: globalState.cardlist
  })
}
//ghh
    render() {  
      console.log(this.props.text)
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
        
       
                {this.state.cardlist.map(item => (
              <div className="purpose">
                  <div className="purpose_title" key={item.text}></div>
                  <div className="btn_purpose_item">X</div>
              </div>
              ))}
          </div>
=======
   componentDidMount() {
    let globalState = store.getState();
    //console.log(globalState);
    this.setState({cardlist: globalState.cardlist});
    // store.subscribe(() => {
    //         //получить данные из глоб.состояния
    //         let globalState = store.getState();
    //         //обновить лок.состояние, чтобы компонент перерендерился
    //         this.setState ({
    //           cardlist: globalState.cardlist
    //         })
    //       });
  }

    render() {
      const {text} = this.props;
        return (
            <div className="purpose_items">
              {/* <ul>
                {this.state.cardlist.map((item, index) => (
                <li key={index}> 
                    <Limit {...item} />
                </li>
                ))}
              </ul> */}
              <div className="purpose">{text}
                <div className="purpose_title">Car</div>
              </div>
              <div className="purpose">{text}
                <div className="purpose_title">House</div>
              </div>
              <div className="purpose">{text}
                <div className="purpose_title">Phone</div>
              </div>
              <div className="purpose">{text}
                <div className="purpose_title">Cash</div>
              </div> 
>>>>>>> ca41811ff3b25bbf283cdfc63851201f6230b9d8
          </div>
        );
    } 

}
export default Cardlist;