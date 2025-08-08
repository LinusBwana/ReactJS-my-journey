# React To Do List App
This is a simple To-Do List App built using React. The purpose of this project was to strengthen my understanding of React fundamentals such as component structure, state management with hooks, and list manipulation in the DOM.

The app allows users to:
- Add tasks to a list
- Delete tasks
- Move tasks up or down to reorder them

It’s a great exercise for learning how to manage dynamic content and user interactions in a React application.

### Technologies & Concepts Used
- React (Functional Components & Hooks)
- JavaScript ES6+
     - Array methods: .map(), .filter()
     - Array destructuring
     - Object destructuring
- Event handling
- Conditional logic

### React To-Do-List app
```jsx
import React, {useState} from "react"

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    };

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t =>[...t, newTask]);
            setNewTask("");
        }
    };

    function deleteTask(index){

        const updateTasks = tasks.filter((_, i) => i !== index );
        setTasks(updateTasks);
    }

    function moveUp(index){

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],  updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
        
    }

    function moveDown(index){

        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],  updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add</button>

            <ol>
                {tasks.map((task, index) => 
                       <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="move-button" onClick={() => moveUp(index)}>⬆️</button>
                            <button className="move-button" onClick={() => moveDown(index)}>⬇️</button>
                       </li>
                )};
            </ol>
        </div>
    )
} 

export default ToDoList
```

## React To-Do List Code Explanation
Here’s a breakdown of how the code works and the concepts used:

### 1. State Management with Hooks
 - *useState([])* initializes the list of tasks.
- *useState("")* tracks the value of the task input field.

### 2. Event Handling
- *handleInputChange:* triggered on every keystroke; updates *newTask*.
- *addTask:* adds the task to the array if it’s not empty.
- *deleteTask:* removes a task using *.filter()*.
- *moveUp* and *moveDown*: reorder tasks using array destructuring.

### 3. Array Destructuring
This syntax is used to swap two items in the array during the task reordering:

```js
[updatedTasks[index], updatedTasks[index - 1]] =
[updatedTasks[index - 1], updatedTasks[index]];
```
This cleanly swaps two tasks without needing a temporary variable.

### 4. Dynamic List Rendering
The *tasks.map()* method renders a dynamic list of `<li>` items. Each item includes:
- Task text
- Delete button
- Up/down reorder buttons

Each button is bound to a function that modifies the array.

## What I Learnt
- How to manage form input and dynamic lists using React state.
- How to conditionally update arrays based on user interactions.
- How to manipulate arrays using filtering and swapping logic for item movement.
- Practical use of array destructuring to simplify logic.
- Importance of using *key* props while rendering lists.
- Improved understanding of how to write clean, reusable functions for UI interaction.