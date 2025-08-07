# React Array of Objects - Car List App
This is a small React app I created to reinforce my understanding of managing an array of objects in state, using *useState*, *onChange* for input handling, onClick for user interaction, and the *updater function* form of setState.

## What This Project Is About
This app allows users to input details about cars (year, make, model) and add them to a list. Each car is stored as an object in a state-managed array.  
I built this to strengthen my knowledge of:
- Working with arrays of objects in state.
- Handling multiple controlled input fields with *onChange*.
- Using *onClick* to trigger actions (adding and removing items).
- Applying the functional update form of the useState setter function (e.g., *setCars(c => [...c, newCar])*) to safely update state based on previous values.

### Features
- Add cars to a list with year, make, and model.
- Remove a car by clicking on its entry.
- Controlled input fields using *onChange*.
- State management for multiple pieces of data (*year*, *make*, *model*, and the car list).

### Full Code
```jsx
import React, { useState } from "react";

function MyComponent() {
    const [cars, setcars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");

    function handleAddCar() {
        const newCar = { year: carYear, make: carMake, model: carModel };
        setcars(c => [...c, newCar]);

        // Reset form
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function removeCar(index) {
        setcars(cars.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setYear(() => event.target.value);
    }

    function handleMakeChange(event) {
        setMake(() => event.target.value);
    }

    function handleModelChange(event) {
        setModel(() => event.target.value);
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <input
                type="number"
                value={carYear}
                onChange={handleYearChange}
            /><br />
            <input
                type="text"
                value={carMake}
                onChange={handleMakeChange}
                placeholder="Enter car make"
            /><br />
            <input
                type="text"
                value={carModel}
                onChange={handleModelChange}
                placeholder="Enter car model"
            /><br />
            <button onClick={handleAddCar}>Add Car</button>
            <ol>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => removeCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default MyComponent;
```

### How It Works
- **State Management:**
     - *cars*: an array of car objects.
     - *carYear*, *carMake*, *carModel*: individual controlled states for form inputs.

- **Adding a Car:**
     - When the "*Add Car*" button is clicked, a new car object is created and added to the array using the updater function (*setcars(c => [...c, newCar])*), which ensures safe, predictable updates.

- **Removing a Car:**
     - Clicking a car in the list removes it using *filter()* by excluding the clicked index.

- **Controlled Inputs:**
     - Each `<input>` is tied to a state variable and updated via *onChange*, ensuring React controls the data flow.


## What I Learnt
- How to manage an **array of objects** in React state.
- Using multiple *useState* hooks to manage separate form fields.
- The benefit of controlled components with *onChange*.
- Safely updating state using the updater function pattern (*prev => [...prev, newItem]*).
- Filtering arrays to **remove items by index**.
- Overall, I reinforced my understanding of React fundamentals like *useState*.