import React, { Component } from 'react';
import './Cardlist.css';
import store from '../../reducer/store';
import { Link } from 'react-router-dom';
import { deleted, refresh } from '../action/CardAction';
import axios from 'axios';

class Cardlist extends Component {
  constructor() {
    super()
      this.state = {
        cardlist: [],
    }
  }

componentDidMount() {

    axios
      .get(`http://localhost:3010/purpose/all`)
      .then(res => {

        // отправляем полученные данные в reducer
        // и в reducer мы сохраняем их в глобальный стейт
        store.dispatch({
          type: refresh,
          payload: [
            ...res.data
          ]
        })
        console.log(res)
        
        // получаем данные из глобального стейта 
        // и обновляем локальный стейт
        let globalState = store.getState();
        this.setState ({
          cardlist: [
            ...globalState.cardlist
          ]
        
        })
      })
      .catch(err => {
          console.log(err);
      });

}
buttonClick = (e) => {
   console.log(this.state)
  }
deleteClick = (id) => {
    console.log(id) 
    axios.delete('http://localhost:3010/purpose/delete/' + id)
    .then(res => {
      console.log(res)
      console.log(res.data)

      store.dispatch({
        type: deleted,
        payload: [...res.data] 
      })
      console.log(res)
    })
    .catch(err => {
        console.log(err);
    });

    //  store.dispatch({
    //      type: deleted,
    //      payload: id
    //  })
}
    render() {  
      console.log('state', this.state.cardlist)  
        return (
            <div className="purpose_items">
                {this.state.cardlist.map(item => {
                  return(
                  <div className="purpose" key={item.id}>
                    <div className="purpose_title">{item.nameTarget}</div>
                    <div className="btn_purpose_item" onClick={()=>this.deleteClick(item.id)}>X</div>
                    <Link to={'/purpose/' + item.id} onClick={()=>this.buttonClick()} className="btn_add_item"></Link>
                  </div>
                )
    })}
            </div>
        );
    } 
  }

export default Cardlist;