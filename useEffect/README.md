# useEffect()
Is a React Hook that tells React to do some code when:
- A component rerenders or
- A component mounts or
- The state of a value changes

## useEffect React Hook Syntax
```jsx
useEffect(function, [dependencies])
```

1. useEffect(() => {}) - Runs after every re-render
2. useEffect(() => {}, []) - Runs only on mount
3. useEffect(() => {}, [value]) - Runs on mount + when the value changes

## Uses of useEffect React Hook
1. Used with event Listeners
2. DOM manipulation
3. Subscription to real-time updates
4. Fetching Data from an API
5. Clean up when a component unmounts (removing a component from the DOM)

## Demostration of useEffect() React Hook

I built this project to explore how the *useEffect* hook behaves in relation to React state variables. The goal was to understand how changes in state trigger re-renders, and how *useEffect* runs only when its specified dependencies change. In this case, I intentionally tracked only *count* in the dependency array, so while the UI updates immediately when either *count* or *color* changes, the document title updates only when *count* changes. This helped me understand the importance of dependency arrays in controlling when effects re-run and how side effects behave differently from direct UI updates.

**`Code`**
```jsx
import React, {useState, useEffect} from "react";
function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    useEffect(() => {
        document.title = `Count: ${count} ${color}`},
        [count]
    );

    function addCount(){
        setCount(c => c + 1)
    };

    function subtractCount(){
        setCount(c => c - 1)
    };

    function handleColorChange(){
        setColor(c => c === "red" ? "green" : "red")
    };

    return(
        <div>
            <p style={{color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button> <br />
            <button onClick={handleColorChange}>Change Colour</button>
        </div>
    )
};

export default MyComponent;
```
### How the Code Works

**State Variables**
```jsx
const [count, setCount] = useState(0);
const [color, setColor] = useState("green");
```
- *count*: tracks a numeric value that can be incremented or decremented.
- *color*: toggles between "*green*" and "*red*" to change the text color.

**useEffect Hook**
```jsx
useEffect(() => {
    document.title = `Count: ${count} ${color}`;
}, [count]);
```

- This effect updates the browser tab title to show the current *count* and *color*.
- However, because only [*count*] is in the **dependency array**, the effect only runs when *count* changes, not when *color* changes.
- So even if the color on screen updates visually, it won’t reflect in the browser title until *count* changes again.

**Event Handlers**
- *addCount*: Increases *count* by 1.
- *subtractCount*: Decreases *count* by 1.
- *handleColorChange*: Toggles color between "*red*" and "*green*".

## What You Learnt
**1. How *useEffect* Works with Dependencies**
I learned that:
- *useEffect* only runs when one of the listed dependencies changes.
- If a state (like *color*) isn't listed, changes to it won't trigger the effect.
- To track multiple values, you need to include both in the dependency array:

```jsx
useEffect(() => {
  document.title = `Count: ${count} ${color}`;
}, [count, color]);
```

**2. Re-renders vs. Effects**
- State changes always trigger re-renders.
- But *useEffect* only runs after a render and only if dependencies changed.

**3. UI vs. Side Effects**
- UI updates (like changing text color) happen immediately with state changes.
- Side effects (like setting *document.title*) require explicitly tracking dependencies.

**4. Cleaner Code with Functional Updates**
- I used updater functions like *setCount(c => c + 1)* which is useful for accessing the latest state.