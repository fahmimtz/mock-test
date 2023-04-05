import { FETCH_TODO } from "../types";

const initialState ={
    items:[]
}

export default function (state=initialState,action){
    switch(action.type){
        case FETCH_TODO:
            return{
                ...state,
                items:action.payload
            };
            default:
                return state
    }
}