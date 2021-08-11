import {input} from '../components/action/CardAction'
// import {add} from '../components/action/CardAction'
// import {toggle} from '../components/action/CardAction'

let initialState = { 
     cardlist: [],  // массив с целями
        newcard: []
}

function reducer(state = initialState, action) {
    console.log(action)
    console.log(state)

    // 1. Добавить в массив целей новую цель (пока добавить только название)
    // 2. Проверить какой последний id у последней цели и добавить к новой цели уникалькальный id.
    if(action.type === input) {  //ввод новых значений в форму 
    let card = action.payload
    console.log(card)
      return ({...state, cardlist: card})
     
    }  
   
      return state;
}
export default reducer;