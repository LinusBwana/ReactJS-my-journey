# useRef
- "use Reference" does not cause re-renders when its value changes. When we want a component to a "remember" some information, but we do not want that information to trigger new renders.
- Useful when;
     1. Accessing/Interacting with DOM elements
     2. Handling Focus, Animations, and Transitions
     3. Managing Timers and Intervals
- unlike *useState()* that re-renders a component when the dtate value changes, *useRef()* does not.

I created this React project as a hands-on exercise to understand how the *useRef* hook works and how it's different from *useState*.

While *useState* causes a component to re-render when its value changes, *useRef* does **not** trigger a re-render when you update the current property. Instead, it's useful for directly accessing and manipulating DOM elements, like focusing an input field or changing its style as I have demostrated in this project.

## useRef React Hook: Project Goals
- Use *useRef* to reference multiple input fields.
- Focus and style the correct input on button click.
- Observe how *useRef* behaves differently from *useState*.

**`Project Code`**
```jsx
import React, {useState, useEffect, useRef} from "react";

function MyComponent(){
    
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component Rendered");
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "green";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "silver";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }

    return(
        <div>
            <button onClick={handleClick1}>Click Me!</button> <br />
            <input ref={inputRef1} type="text" /><br />
            <button onClick={handleClick2}>Click Me!</button> <br />
            <input ref={inputRef2} type="text" /><br />
            <button onClick={handleClick3}>Click Me!</button> <br />
            <input ref={inputRef3} type="text" />
        </div>
    );
}

export default MyComponent;
```

**Explanation**

- I created three references using *useRef(null)*: *inputRef1*, *inputRef2*, and *inputRef3*.
- Each button click triggers a handler that:
     - Focuses the corresponding input field.
     - Changes its background color.
     - Resets the styles of the other input fields.
- *useRef* lets me directly access the DOM elements via *current*, without triggering a re-render.
- The *useEffect* logs "Component Rendered" each time the component renders, helping me verify that using *useRef* didn’t cause any re-renders.

**What I Learnt**

- *useRef* is perfect for persisting a mutable value across renders without causing re-renders.
- It's very handy for referencing DOM elements directly like input fields to manipulate them (e.g., focusing, changing style).
- In contrast, *useState* is great when you want changes in values to be reflected in the UI and to trigger re-renders.