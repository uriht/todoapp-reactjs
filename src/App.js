// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks , setTask] = useState([]);
  const [newTask , addNewTask] = useState("");
  const handleChange = (events) => {
        addNewTask(events.target.value);
  };
  const addTask2List = () =>{
        const taskVar = [...tasks, newTask];
        setTask(taskVar);
  }
  return (
    <div className='App'>
      <div className='AddTaskHere'>
      <input onChange={handleChange} />
      <button onClick={addTask2List} >Add Task</button>
      </div>
      <div className='DisplayTaskHere'>
        {
          tasks.map((task)=>{
            return <h3>{task}</h3>
          })
        }

      </div>
      
    </div>
  );
}

export default App;
