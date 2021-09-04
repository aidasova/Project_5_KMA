import {addPurpose} from '../components/action/CardAction';
import {add} from '../components/action/CardAction';
import {deleted} from '../components/action/CardAction';
import { edit, refresh } from '../components/action/CardAction';

let initialState = { 
    cardlist: [],   
    }

function reducer(state = initialState, action) {

    if(action.type === addPurpose) {  
        let maxId = Math.max.apply(null, state.cardlist.map(item => item.id))
        action.payload.id = +maxId + 1;
        state.cardlist.push(action.payload)
        return {
            ...state, cardlist: state.cardlist
        }
    }   
    if(action.type === add) {
          let res = state.cardlist.map((item) => {
            if(item.id === action.payload.id) {
               return item = {...item, ...action.payload}
            }
            return item; 
           })
           return {
            ...state, cardlist: res
        }
        
    }
    if(action.type === deleted) {
        let idToRemove = state.cardlist.filter((item) => {
            return item.id !== action.payload
        });
        return ({ 
            cardlist: idToRemove
        });
    }
    
    if(action.type === edit) {
        
        // 1. Найти в state.cardList элемент с id, который нам передали
        
        // 2. В полученном объекте поменять все свойства на переданные
        let dataToUpdate = action.payload
        let newUpdate = state.cardlist.map((item) => {
            if (item.id === dataToUpdate.id ) {
                return dataToUpdate
            }
            return item 
        })
        let newState = {...state}
        newState.cardlist = newUpdate
        console.log(newState)

        // 3. Перезаписать глобальный на новые значения после их изменения

        return newState;
    }
    
    if(action.type === refresh) {
        let newState = {
            ...state,
            cardlist: action.payload
        }
        return (newState)
    }
   
    return state;
}

export default reducer;