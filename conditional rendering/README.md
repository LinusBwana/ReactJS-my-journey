# React Conditional Rendering
This project is a simple React app that demonstrates **conditional rendering** using props. Conditional rendering allows us to control what gets rendered in our applications based on certain conditions such as whether a user is logged in.

In this app, I built a component that shows a **welcome message** if the user is logged in, or a **login prompt** if the user is not.

## What I Did

- I created a main component (`App`) that renders a child component (`UserGreeting`) with props.
- I passed two props: `isLoggedIn` (boolean) and `username` (string).
- I used conditional rendering inside the `UserGreeting` component to display different UI based on the `isLoggedIn` value.
- I added `propTypes` to enforce prop types and `defaultProps` to provide fallback values.
- I also styled the components using External CSS.

### Code Files

#### `App.jsx`
```jsx
import UserGreeting from './UserGreeting.jsx';

function App() {
    return (
        <>
            <UserGreeting isLoggedIn={true} username="Mr. Linus" />
        </>
    );
}

export default App;
```

#### `UserGreeting.jsx`
```jsx
import PropTypes from 'prop-types';

function UserGreeting({isLoggedIn=false, username="Guest"}){

    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {username}
                            </h2>
    const loginPrompt = <h2 className="login-prompt">
                         Please Login to continue
                         </h2>

    return(isLoggedIn ? welcomeMessage : loginPrompt );
}

UserGreeting.proptype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

export default UserGreeting
```

#### `index.css`
```jsx
.welcome-message {
    font-size: 2.5em;
    background-color: rgba(55, 113, 55, 0.872);
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 0px;
}

.login-prompt {
    font-size: 2.5em;
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 0px;
}
```

### What I Learnt
1. How to use conditional rendering in React with the ? : ternary operator.
2. How to pass props to components.
3. How to set defaultProps to avoid missing values.
4. How to use PropTypes for prop validation.
5. How to apply CSS styling conditionally using class names.
6. Improved understanding of how components communicate in a React app.