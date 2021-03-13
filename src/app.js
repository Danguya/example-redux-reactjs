import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { add_task } from './actions';
import './App.css';
import AllTasks from './Components/AllTasks';
import Lista from './Components/Lista';


function App() {
    const dispatch  = useDispatch();

    const [input, setInput] = useState("");
    const [id, setId] = useState("");

    const handleChange = (event) => {
        
        setInput(event.target.value);
    }
    const handleClick = (event) => {
        setId(Math.random().toString(36).substr(2, 9));
        console.log(id, input);
        event.preventDefault();
        dispatch(add_task(id,input));
      }

    return (
        <>
        <div id="task-manager">
            <h1>Usando o Redux</h1>
            <div id="form">
                <input 
                    type="text" 
                    id="input_text" 
                    placeholder="Nome"
                    value={input}
                    onChange={handleChange}
                
                />
                <input type="submit" onClick={handleClick} id="button_add" value="Adicionar" />
            </div>
            <AllTasks />
            
        </div>
        <Lista />
        </>
    )
}

export default App
