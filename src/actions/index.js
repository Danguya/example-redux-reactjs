import * as types from './types';

const add_task = (id, title) =>{
    return{
        type: types.ADD_TASK,
        payload: { 
            id, 
            title
        }
        
    }

}
const remove_task = () =>{
    return{
        type: types.REMOVE_TASK
    }
}

export  {add_task, remove_task}