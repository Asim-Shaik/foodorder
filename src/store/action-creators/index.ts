import { ActionType } from "../action-types";
import { Action } from "../actions";
import {Dispatch} from 'redux'

interface Type{
    id:number,name:string,price:number
}

export const addItem = ({id,name,price}:Type)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type: ActionType.ADDITEM,
            payload:{id,name,price}
        })
    }
}

export const clear = ()=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type: ActionType.CLEAR
        })
    }
}


export const actionCreators = {addItem,clear} 