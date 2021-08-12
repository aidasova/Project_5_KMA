import React, { Component } from 'react';
import './Cardlist.css';
import store from '../../reducer/store';
import Limit from '../Limit/Limit';

class Cardlist extends Component {
  state = { 
    cardlist: [],
    text: ''
}
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
          </div>
        );
    } 

}
export default Cardlist;