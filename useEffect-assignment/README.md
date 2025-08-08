# useEffect React Hook
This is a small React project where I created a functional component that tracks and displays the **current width and height of the browser window in real-time**. It updates the document title and renders the dimensions dynamically as the window is resized.
- It is a continuation of my [previous](https://github.com/LinusBwana/ReactJS-my-journey/tree/main/useEffect) project on useEffect.

## Purpose of the Project
I built this project to **reinforce my understanding of the `useEffect` hook in React**, especially in the context of:

- Managing side effects
- Event listeners
- Cleanup functions
- Using dependencies effectively

This exercise helped me gain deeper insights into how React manages lifecycle behavior in functional components.

## useEffect React Hook Project: Concepts Used

- React Functional Components
- React Hooks (`useState`, `useEffect`)
- Browser Events (resize)**
- Cleanup Functions in `useEffect`
- Dependency Arrays
- DOM Manipulation (updating `document.title`)

### Project code:
```jsx
import React, {useState, useEffect} from "react";

function MyComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleWindowSize);
        
        return () => {
            window.removeEventListener("resize", handleWindowSize);
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} * ${height}`;
    }, [width,height]);

    function handleWindowSize(){
        setWidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    return(
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    )
}

export default MyComponent
```
### Code Explanation

**1. State Initialization:**  
I initialize *width* and *height* with the current window size using *window.innerWidth* and *window.innerHeight.*

```jsx
const [width, setWidth] = useState(window.innerWidth);
const [height, setheight] = useState(window.innerHeight);
```

**2. Listening to Resize Events:**  
The *useEffect* sets up an event listener for the window's resize event.  
- The cleanup function ensures that the event listener is removed when the component unmounts or re-renders, preventing memory leaks or unintended behavior.

```jsx
useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => {
        window.removeEventListener("resize", handleWindowSize);
    };
}, []);
```
 
**3. Updating the Document Title:**  
This side effect updates the browser tab's title every time the width or height state changes. The dependency array [width, height] ensures this runs only when those values are updated.

```jsx
useEffect(() => {
    document.title = `Size: ${width} * ${height}`;
}, [width, height]);
```

**4. Handling Resize Logic:**   
I defined a handler function that updates both states to the latest window size during a resize event.

```jsx
function handleWindowSize() {
    setWidth(window.innerWidth);
    setheight(window.innerHeight);
}
```
**5. Rendering the Output:**

```jsx
return (
    <div>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </div>
);
```

## What I Learnt
- How to use *useEffect* to set up and clean up side effects.
- Why cleanup is essential for event listeners to avoid memory leaks.
- The difference between a stable function and a new function in every render.
- How dependency arrays control when effects re-run.
- Practical usage of *useState* and *useEffect* to reflect browser changes in the UI.

This was a hands-on way to see how React hooks tie into real-world DOM behavior