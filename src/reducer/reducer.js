import {addPurpose, input} from '../components/action/CardAction'
import {add} from '../components/action/CardAction'
// import {toggle} from '../components/action/CardAction'

let initialState = { 
    listItem: [],
    cardlist: [
                { 
                    id: 1,
                    // text: "цель1",
                    // requiredAmount: "300000",
                    // targetTerm: "6",
                    // startingAmount: "0",
                    // depositInterest: "5"
                },
                { 
                    id: 2,
                    // text: "цель2",
                    // requiredAmount: "300000",
                    // targetTerm: "6",
                    // startingAmount: "0",
                    // depositInterest: "5"
                },
                { 
                    id: 3,
                    // text: "цель3",
                    // requiredAmount: "300000",
                    // targetTerm: "6",
                    // startingAmount: "0",
                    // depositInterest: "5"
                },
            ],
    infoCard: [
                {
                    requiredAmount: "300000",
                    targetTerm: "6",
                    startingAmount: "0",
                    depositInterest: "5"
                }
            ]     
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
        state.infoCard.push(action.payload)
        console.log(state.infoCard.push(action.payload))
        let z = state.cardlist.push.apply(state.cardlist, state.infoCard)
        return {
            ...state, cardlist: z
        }
    }
      return state;
}
export default reducer;