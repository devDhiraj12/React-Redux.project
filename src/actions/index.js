import * as actionTypes from './actionTypes'

export const addCounter=(product)=>({
    type:actionTypes.ADD_COUNTER,
    payload:product
})

export const reduceCounter=(product)=>({
    type:actionTypes.REDUCE_COUNTER,
    payload:product
})