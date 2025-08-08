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