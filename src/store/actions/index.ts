import {ActionType} from "../action-types/index"

interface AddAction{
    type:ActionType.ADDITEM
    payload: {id:number,name:string,price:number}
}
interface RemoveAction{
    type:ActionType.REMOVEITEM
    payload:[]
}
interface ClearAction{
    type:ActionType.CLEAR
}

export type Action = AddAction|RemoveAction|ClearAction