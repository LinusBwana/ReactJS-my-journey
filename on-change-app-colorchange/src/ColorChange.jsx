import react, {useState} from "react";

function ColorChange(){

    const [color, setColor] = useState("#ffffff");

    function handleChangeColor(event){
        setColor(event.target.value)
    };

    return(
    <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label>Select a color</label>
        <input type="color" value={color} onChange={handleChangeColor}/>   
    </div>
    );
};

export default ColorChange;