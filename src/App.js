// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
    //Declarations
    const [todoList, setTask] = useState([]);
    const [newTask, addNewTask] = useState("");
    // Functions
    const handleChange = (events) => {
        addNewTask(events.target.value);
    };
    // Addd the Task to the todo LIst
    const addTask2List = () => {
        const taskObj = {
            id: todoList.length === 0
                ? 1
                : todoList[todoList.length - 1].id + 1,
            taskName: newTask
        };
        setTask([...todoList, taskObj]);
    }
    console.log(todoList)
    // Delete the Task
    const deleteTask = (id) => {
        const newTodo = todoList.filter((task) => {
            if (task.id === id) 
                return false;
            return true;
        })
        setTask(newTodo);
    }

    //Render-return
    return (

        <div className='App'>
            {/* Adding Task Here */}
            <div className='AddTaskHere'>
                <input onChange={handleChange}/>
                <button onClick={addTask2List}>Add Task</button>
            </div>
            {/* Displaying Task Here */}
            <div className='DisplayTaskHere'>
                {
                    todoList.map((task) => {
                        return <div>
                            <h3>{task.taskName}</h3>
                            <button onClick={() => deleteTask(task.id)}>X</button>
                        </div>

                    })
                }
            </div>

        </div>
    );
}

export default App;
