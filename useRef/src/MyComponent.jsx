import React, {useState, useEffect, useRef} from "react";

function MyComponent(){
    
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Componenent Rendered");
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
    )
}

export default MyComponent
