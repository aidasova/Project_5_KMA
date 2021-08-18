import {addPurpose} from '../components/action/CardAction';
import {add} from '../components/action/CardAction';
import {deleted} from '../components/action/CardAction';

let initialState = { 
    cardlist: [
                { 
                    id: 1,
                    text: "цель1",
                    requiredAmount: "300000",
                    targetTerm: "6",
                    startingAmount: "0",
                    depositInterest: "5",
                    taskResult: "",
                },
                { 
                    id: 2,
                    text: "цель2",
                    requiredAmount: "300000",
                    targetTerm: "6",
                    startingAmount: "0",
                    depositInterest: "5",
                    taskResult: "",
                },
            ],   
        }

function reducer(state = initialState, action) {
    console.log(action)
    console.log(state)

    if(action.type === addPurpose) {  
        let maxId = Math.max.apply(null, state.cardlist.map(item => item.id))
        console.log(maxId)
        action.payload.id = +maxId + 1;
        console.log(action.payload.id)
        state.cardlist.push(action.payload)
        return {
            ...state, cardlist: state.cardlist
        }
    }   
    if(action.type === add) { 
        console.log(action.payload.id)
        if(state.cardlist.find(item => item.id === action.payload.id)){
            
            state.cardlist.push(action.payload)

        }
         return {
            ...state, cardlist: state.cardlist
        }
        
    }
    if(action.type === deleted) {
        console.log(action.payload)
        state.cardlist.filter((item) => { 
        return item.id !== action.payload
    });   
    
        return ({ ...state, cardlist: state.cardlist});
    }
   
      return state;
}

export default reducer;