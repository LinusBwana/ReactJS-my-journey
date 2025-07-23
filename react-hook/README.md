# React hook
React hook is a special function that allows functional components to use React features without class components(Ract v16.8).  
Examples include useState(), useEffect(), useContext(), uerReducer(), useCallback() etc.   
For the purpose of understanfing react hooks, I practised using useState()

## useState() React hook
A react hook that allows us to create a stateful variable AND a setter function to update its value in the virtual DOM.[name, setName]  
- When we call *useState(initialValue)*, it returns a pair:

```jsx
const [variable, setVariable] = useState(initialValue);
```
- variable – the current state value.
- setVariable – a function to update that value.

Whenever we call *setVariable(newValue)*, React re-renders the component with the updated state.

## Demostartion of useState() ReactJS hook
This practise project demonstrates my understanding of the *useState* hook in React by building and rendering two functional components: *MyComponent* and *Counter* . Both are rendered through the *App.jsx*. 

`MyComponent.jsx`  
In this component, I used *useState* to manage three different state values:
- *name (string)*: Initialized to "*Guest*".
- *age (number)*: Initialized to *0*.
- *isEmployed (boolean)*: Initialized to *true*.

How I used each:
- *setName("Linus")* changes the *name*.
- *setAge(age + 2)* increases the age by *2*.
- *setIsEmployed(!isEmployed)* toggles employment status between "*Yes*" and "*No*".

```jsx
import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(true);

    const updateName = () => {
        setName("Linus");
    };

    const incrementAge = () => {
        setAge(age+2);
    };

    const toggleEmploymentStatus = () => {
        setIsEmployed(!isEmployed);
    };

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmploymentStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent 
```

`Counter.jsx`  
I created a *Counter* component to demonstrate how *useState* handles numeric values. Here’s what I did:
- Initialized a *count* state variable:
- Built three functions to interact with the state:
- *increment()* increases the count by 1.
- *decrement()* decreases the count by 1.
- *reset()* sets the count back to 0.
- I used buttons with onClick to trigger each state update.
- Rendered the current count and the three buttons in the UI.

```jsx
import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
    };
    const decrement = () => {
        setCount(count-1);
    };
    const reset = () => {
        setCount(0);
    };

    return(
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>Increment</button>
        </div>
    )

};

export default Counter;
```

`App.jsx`   
In *App.jsx*, I imported both components and rendered them:
```jsx
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

function App() {

  return (
    <> 
        <Counter />
        <MyComponent />
    </>
  );
};

export default App
```

## This small project helped me practice:
- Initializing and updating state in React.
- Using multiple *useState hooks* within a single component.
- Managing different data types (number, string, boolean).