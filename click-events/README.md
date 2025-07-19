# Click Events
A click event is an interaction when a user clicks on a specific element. We can respond to clicks by passing a callback to the onClick event handler.  
This project demonstrates how to handle click events in React using functional components.  
In this practice project, I created and rendered two components:
- A *Button* component that responds to *onClick* events.
- A *ProfilePicture* component that responds to *onDoubleClick* events.

These components are rendered and tested inside the *App.jsx* file.

## Demostration of *click events* in ReactJS
I demostrated my understanding of *click events* as illustrated below
### Components Created:
- *Button.jsx:* Displays a button that tracks how many times it has been clicked. After a certain number of clicks, it stops responding and updates the button text.
- *ProfilePicture.jsx*: Displays a profile image that disappears when double-clicked.

### App Setup:
- I Imported and rendered both components inside *App.jsx*.
- Used JSX event handler props:
     - *onClick* for the button.
     - *onDoubleClick* for the image.

### Project Codes
#### `App.jsx`
```jsx
import Button from './Button.jsx';
import ProfilePicture from './ProfilePicture.jsx';

function App(){

    return(
        <>
            <Button />
            <hr />
            <ProfilePicture />
        </>
    );
}

export default App;
```

#### `Button.jsx`
```jsx
function Button(){

    let count = 3;

    const clickBtn = (e) => {
        if(count > 1){
            count--;
            console.log(`${count}`);
        }
        else{
            e.target.textContent = "Hey STOP";
        }
    };

    return(
        <button onClick={(e) => clickBtn(e)}>Click Me</button>
    );
};

export default Button;
```

#### `ProfilePicture.jsx`
```jsx
function ProfilePicture(){

    const imageUrl = './src/assets/profile.jpg';

    function clickProfile(e){
        e.target.style.display = "none";
    };

    return(
        <>
            <img onDoubleClick={e => clickProfile(e)} src={imageUrl} alt="profile picture" />
        </>
    );
};

export default ProfilePicture;
```

## What I Have Learnt
### React Event Handling
- In React, I should pass **functions as references** to event handlers like onClick.  

**`Example:`** 

```jsx
<button onClick={handleClick}>Click Me</button>
```

- This ensures the function runs **only when the event happens** (e.g. on a click), not during rendering.  
- If I use **onClick={handleClick()}**, the function is called immediately during render, which is not what I want.

### React vs addEventListener
- I should use React's built-in event props like *onClick*, *onChange*, *onSubmit*, etc., instead of manually attaching DOM listeners with *addEventListener*.  
- React manages the DOM internally, so using *onClick* is the correct and clean way to handle events in React components.

### When to Use addEventListener
- I only need to use *addEventListener* when dealing with:  
     - Global events (e.g. *window*, *document*)  
     - Events not directly supported by React  
- In those cases, I should use *useEffect* to safely attach and clean up the event listener.

**`Example:`**

```jsx
useEffect(() => {
  const handleScroll = () => console.log('Scrolling');
  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```
- How to use *onClick* and *onDoubleClick* in React to handle user events.
- How to pass event objects (*e*) to event handler functions.
- How to manipulate the DOM using event targets (e.g., *e.target.textContent*, *e.target.style*).