import React from 'react'
const transReducer=((state,action)=>{
    switch(action.type){
        case 'ADD_TRANSACTION':{
        return[
            action.payload,
            ...state]
        }
        default:
        return state
    }
})
export default transReducer;