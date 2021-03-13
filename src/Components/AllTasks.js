import React from 'react'
import { connect } from 'react-redux';

const AllTasks = ({tasks}) => {
    return (
        <div id="all-tasks">
            <ol>
                {
                    tasks.map( task => <li key={task.id}> { task.title } <button>Remover</button> </li> )
                }
            </ol>
        </div>
    )
}
function mapStateToProps(state){
    return{
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(AllTasks);
