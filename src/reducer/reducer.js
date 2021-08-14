import {input} from '../components/action/CardAction'
// import {add} from '../components/action/CardAction'
// import {toggle} from '../components/action/CardAction'

let initialState = { 
    listItem: [],
    cardlist: [
    { 
        id: 1,
        text: "цель1",
        requiredAmount: "300000",
        targetTerm: "6",
        startingAmount: "0",
        depositInterest: "5"
    },
    { 
        id: 2,
        text: "цель2",
        requiredAmount: "300000",
        targetTerm: "6",
        startingAmount: "0",
        depositInterest: "5"
    },
    { 
        id: 3,
        text: "цель3",
        requiredAmount: "300000",
        targetTerm: "6",
        startingAmount: "0",
        depositInterest: "5"
    },
    { 
        id: 4,
        text: "цель4",
        requiredAmount: "300000",
        targetTerm: "6",
        startingAmount: "0",
        depositInterest: "5"
    }
    ],
    
}

function reducer(state = initialState, action) {
    console.log(action)
    console.log(state)

    if(action.type === input) {  //ввод новых значений в форму 
        return {
            ...state, cardlist: state.cardlist.push(action.payload)
        }
    }  
   
      return state;
}
export default reducer;