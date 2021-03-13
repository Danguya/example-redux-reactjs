import React from 'react'
import { connect } from 'react-redux';



function Lista({tasks}) {
    return (
        <div id="lista">
            <h1>Dados vindo do Redux</h1>
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
export default connect(mapStateToProps)(Lista)
