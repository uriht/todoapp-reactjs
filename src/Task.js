export const Task = (props) => {
    return (
        <div className='task'>
            <div className="display">

                <h3 style={ {color : props.completed ? "green" : "black" }} >{props.taskName}</h3>
            </div>
            <div >
                <button onClick={() => props.markComplete(props.id)}>&#10003;</button>
                <button onClick={() => props.deleteTask(props.id)}>X</button>
            </div>
        </div>
    )
};
