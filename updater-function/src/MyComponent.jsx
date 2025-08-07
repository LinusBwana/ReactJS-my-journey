import React, {useState} from "react";

function MyComponent(){

    const [count, setCount] = useState(0);

    function increment(){

        // Uses the PENDING state to calculate the next state.
        // React puts the update function in a queue.
        // Calls them in the same order during the next render.
        setCount(c => c + 1)
        setCount(c => c + 2)
        setCount(c => c + 4)
        setCount(c => c + 2)
        setCount(c => c + 3)
    }

    function decrement(){
        setCount(c => c - 1)
        setCount(c => c - 3)
        setCount(c => c - 5)
    }

    function reset(){
        setCount(c => c = 0)
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
    
}

export default MyComponent