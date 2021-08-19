import React, { Component } from 'react';
import './PurposePage.css';
import store from '../../reducer/store';
import { Link } from 'react-router-dom';

class PurposePage extends Component {
    state = {
        card: ''
      }
    componentDidMount() {
        let globalState = store.getState();
        console.log(globalState)
        let card = globalState.cardlist.filter(card => {
          return card.id == this.props.match.params.id
        })[0]
        console.log(card)
        this.setState({
          card : card
        })
        this.setState ({
        cardlist: globalState.cardlist
      })
    }
    purposeClick() {
        console.log(this.state)
    }
    render() { 
    //console.log(this.props.match)
    //console.log(this.state)

        return (
            <div className="purpose_items_id">
              <div className="purpose_part">
                <div className="purpose_item_text">{this.state.card.text}</div>
                <div className="purpose_item">Необходимая сумма: {this.state.card.requiredAmount}</div>
                <div className="purpose_item">Срок достижения: {this.state.card.targetTerm}</div>
                <div className="purpose_item">Стартовая сумма:{this.state.card.startingAmount}</div>
                <div className="purpose_item">Процент по вкладу: {this.state.card.depositInterest}</div>
                <div className="purpose_item">Сумма ежемесячного пополнения: {this.state.card.taskResult}</div>
              </div>
          <Link to={'/purpose/edit/' + this.state.card.id} className="purpose_item_link">Редактирование цели</Link>
          <Link to={'/'} onClick={()=>this.purposeClick()} className="purpose_item-link_two">На главную</Link>
            </div>
        );
    }
}
 
export default PurposePage;