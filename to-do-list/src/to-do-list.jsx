import React, {useState, useEffect} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            try {
                const parsed = JSON.parse(storedTasks);
                if (Array.isArray(parsed)) {
                    setTasks(parsed);
                } else {
                    console.warn("Stored tasks are not an array.");
                    setTasks([]);
                }
            } catch (error) {
                console.error("Failed to parse tasks from localStorage:", error);
                setTasks([]);
            }
        }
    }, []);


    function handleInputChange(event){
        setNewTask(event.target.value);
    };

    function handleKeyDown(event){
        if(event.key === "Enter"){
            addTask();
        }
    };

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => {
                const updatedTasks = [...t, newTask];
                localStorage.setItem("tasks", JSON.stringify(updatedTasks));
                return updatedTasks;
            })
            setNewTask("");
        }
    };

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks))
    }

    function moveUp(index){

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],  updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        }
        
    }

    function moveDown(index){

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],  updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        }
    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div className="input-container">
                <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange} onKeyDown={handleKeyDown} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                       <li key={index}>
                            <span className="text">{task}</span>
                            <div className="controls">
                                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                                <button className="move-button" onClick={() => moveUp(index)}>⬆️</button>
                                <button className="move-button" onClick={() => moveDown(index)}>⬇️</button>
                            </div>
                       </li>             
                )};
            </ol>
        </div>
    )
} 

export default ToDoList