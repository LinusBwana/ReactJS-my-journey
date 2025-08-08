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