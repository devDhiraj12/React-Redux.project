import * as actionTypes from '../actions/actionTypes'

const counterReducer=(state=[{id:0,name:""}],action)=>{
    let newState=[]
    switch(action.type){
        case actionTypes.ADD_COUNTER:
            let prods=[...state,action.payload]
            newState=[...prods]
            return newState

        case actionTypes.REDUCE_COUNTER:
            let prods1=[...state - action.payload]
            newState=[...prods1]
            return newState            
        default:
            return state    
    }
}

export default counterReducer