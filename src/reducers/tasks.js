import * as types from '../actions/types.js';
import { tasks as initialState } from '../DB';

const tasksReducer = (state = initialState, action) =>{
    console.log('action');
    switch (action.type) {
        case types.ADD_TASK:
            console.log(action)
            return[
                ...state,
                action.payload
                ]
            
        case types.REMOVE_TASK:
            return state
            
        default:
            return state;          
    }
}

export default tasksReducer;