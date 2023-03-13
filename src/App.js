// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import {Task} from './Task';

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
            taskName: newTask,
            completed: false
        };
        setTask([
            ...todoList,
            taskObj
        ]);
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
    // Marking it as Complete
    const markComplete = (id) => {
        todoList.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: true
                };
            } else {
                return task;
            }
        })
    }

    //Rendering
    return (

        <div className='App'>
            {/* Adding Task Here */}
            <div className='AddTaskHere'>
                <h1>Uriht Todo List</h1>
                <input className='inputbox' onChange={handleChange}/>
                <button className='addbtn' onClick={addTask2List} role="button">Add Task</button>
            </div>
            {/* Displaying Task Here */}
            <div className='DisplayTaskHere'>
                {
                    todoList.map((task) => {
                        return (
                            <Task
                                taskName={task.taskName}
                                id={task.id}
                                deleteTask={deleteTask}
                                markComplete={markComplete}
                                completed={task.completed}/>
                        )

                    })
                }
            </div>

        </div>
    );
}

export default App;
