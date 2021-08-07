import {input} from '../components/action/CardAction'
import {add} from '../components/action/CardAction'
import {toggle} from '../components/action/CardAction'

let initialState = { 
    cardlist: [], 
    newcard: {} 
}

function reducer(state = initialState, action) {
    console.log(action)
    console.log(state)
    if(action.type === input) {  //ввод
        return {
            ...state, newcard : {
                ...state.newcard, ...action.payload
            }
        }     
    }  //if (action.type === add) { // добавление
    //     return {
    //         ...state,
    //         cardlist: [...state.cardlist,  state.newcard]
    //     }
    // } if (action.type === toggle) { //скрытие
    //     return {
    //         ...state, isValid: !state.isValid
    //     }
    // }
      return state;
}
export default reducer;