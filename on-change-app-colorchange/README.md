# React Color Picker App
This is a simple React app I built to help me understand how *useState* and *onChange* work together.  
The core idea is:  
- When I pick a color, React updates the background color and shows the selected value using state.

## Files in React Color Picker App
`1. ColorChange.jsx`  
This component:  
- Lets me select a color using *`<input type="color" />`*
- Shows the selected color in a preview box *`(<div>)`*
- Updates a React state variable using *useState*
- Reacts to user changes with the *onChange* event

```jsx
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
```

`2. App.jsx`  
This is the main file where I:
- Import *ColorChange*
- Render it inside the app

```jsx
import ColorChange from "./ColorChange.jsx"

function App() {

  return (
    <>
      <ColorChange />
    </>
  )
}

export default App
```

## React Color Picker App Step by Step
1. The page loads with white as the default color:
```jsx
const [color, setColor] = useState("#ffffff");
```

2. When I pick a new color using the color input:
```jsx
<input type="color" value={color} onChange={handleChangeColor} />
```

3. The *onChange* event is triggered, and my handler runs:
```jsx
function handleChangeColor(event) {
  setColor(event.target.value);
}
```

4. *setColor* updates the state with the new hex value (like #ff0000 for red).
5. React re-renders:
     - The `<div>` background changes to the selected color.
     - The paragraph text updates to show the current hex value.

This project was a small but powerful way to practice working with forms, state, and real-time updates in React.  
I now feel more confident using:  
- *useState* to store and update values
- *onChange* to respond to user input
- Inline styling with dynamic values

## What I Learnt from the React Color Picker App
This project helped me understand:
- How to use *useState()* to store a value that can change
- How *onChange* works to detect user input
- How to get the selected color using *event.target.value*
- How to update the UI in real time using state
- How to apply a state value to a CSS style with *style={{ backgroundColor: color }}*