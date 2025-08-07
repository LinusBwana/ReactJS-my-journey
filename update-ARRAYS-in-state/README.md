# React Food List App - Update arrays in state
This is a simple React app I created to reinforce my understanding of React hooks especially the useState hook and the functional form of state updates. The app lets users add and remove items from a list of foods by interacting with the UI.

## Purpose of the Project
The main goals of building this project were to:
1. Practice using the *useState* hook effectively.
2. Understand the update function form of useState.
3. Explore DOM manipulation vs. React state handling.
4. Reinforce knowledge of rendering dynamic lists in React.

## Features
Displays a list of food items.
- Allows users to add a new food by typing into an input field.
- Clicking on a food item removes it from the list.
- Automatically clears the input field after adding a new item.
- Capitalizes the food input before adding.

### Code

```jsx
import React, { useState } from "react";

function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Banana"]);

    function handleAddFood() {
        const input = document.getElementById("foodInput").value.trim();
        const newFood = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                )}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add food</button>
        </div>
    );
}

export default MyComponent;
```

### How the Code Works
- *useState* is used to manage an array of food items.
- The *handleAddFood* function:
     - Grabs the input value from the DOM.
     - Clears the input field.
     - Uses the functional form of *setFoods* to update the array immutably.
- The *handleRemoveFood* function removes an item by filtering it out based on its index.
- The *map()* function dynamically renders each food item into a list, with a *key* and click handler for removal.

### What I Learnt
- How to use *useState* to manage array-based state in React.
- The importance of using the functional form of the state updater (*setFoods(f => [...f, newFood])*) to avoid stale closures.
- The difference between directly manipulating the DOM vs. relying on React’s controlled components.
- List rendering in React using *.map()* and proper key usage.
- How to handle item removal using *filter().*