// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
    //Declarations
    const [tasks, setTask] = useState([]);
    const [newTask, addNewTask] = useState("");
    // Functions
    const handleChange = (events) => {
        addNewTask(events.target.value);
    };
    const addTask2List = () => {
        const taskVar = [
            ...tasks,
            newTask
        ];
        setTask(taskVar);
    }
    const deleteTask = (task) => {
      const newTodo = tasks.filter((oldTask)=>{
          if(oldTask === task) return false;
          return true;
      })
      setTask(newTodo);
    }

    //Render-return
    return (

        <div className='App'>
            <div className='AddTaskHere'>
                <input onChange={handleChange}/>
                <button onClick={addTask2List}>Add Task</button>
            </div>
            <div className='DisplayTaskHere'>
                {
                    tasks.map((task) => {
                        return <div>
                            <h3>{task}</h3>
                            <button onClick={() => deleteTask(task)}>X</button>
                        </div>

                    })
                }

            </div>

        </div>
    );
}

export default App;
