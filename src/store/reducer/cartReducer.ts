import { ActionType } from '../action-types';
// type Action = {
//     type:string,
//     payload?:number
// }
import {Action} from '../actions/index'

const initState = {
    item: [
        

    ]
};
const reducer =(state :{}= initState, action : Action)=>{
    switch(action.type){
        case ActionType.ADDITEM:
            return action.payload
        case ActionType.CLEAR:
            return []
            default:
                return state
    }

}




export default reducer