import {addPurpose, input} from '../components/action/CardAction'
import {add} from '../components/action/CardAction'
// import {toggle} from '../components/action/CardAction'

let initialState = { 
    listItem: [],
    cardlist: [
                { 
                    id: 1,
                    text: "цель1",
                },
                { 
                    id: 2,
                    text: "цель2",
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
        console.log(state.cardlist)
        const maxId = state.cardlist.reduce((max, item) => item.id > max ? item.id : max, 0);
        console.log(maxId)
        for(let i = 0; i < state.cardlist.length; i++) {
            console.log(state.cardlist[i].id)
            if (state.cardlist[i].id === maxId) {
                Object.assign(state.cardlist[i], action.payload)
            }
            console.log(state.cardlist)
        }

        return {
           ...state, cardlist: state.cardlist
        }
    }
      return state;
}
export default reducer;