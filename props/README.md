# props
In this project, I learned about three fundamental React concepts:

- **Props:** Short for properties. They are inputs passed from a parent component to a child component. They allow components to be dynamic and reusable by passing data or event handlers.

- **PropTypes:** PropTypes is a library that helps validate the types of props passed to components during development. It ensures that components receive the correct type of data, helping catch bugs early.

- **Default Props:** Default props provide fallback values for props when no value is passed. This ensures components have meaningful defaults and prevents undefined values.

### Common PropTypes
The prop-types library offers validators for many data types, including:
```javascript
PropTypes.string
PropTypes.number
PropTypes.bool
PropTypes.array
PropTypes.object
PropTypes.func
PropTypes.node
PropTypes.element
PropTypes.oneOf([...]) — enum of allowed values
PropTypes.shape({...}) — object with specific shape
```

In this project, I used only the following PropTypes:
```javascript
PropTypes.string
PropTypes.number
PropTypes.bool
```

## How PropTypes Are Imported
```javascript
import PropTypes from 'prop-types';
```

This line tells React (or rather the JavaScript environment running React):

*“Import the PropTypes object from the prop-types npm library.”*

*prop-types* is a separate npm package you install to enable runtime type checking of props during development


## What I Practiced
- Passing props to components
- Validating prop types with PropTypes
- Setting default prop values using parameter defaults (instead of defaultProps)
- Rendering multiple instances of the Student component with different props

## Code Explanation
### App.jsx
```javascript
import Student from './Student';

function App() {

  return (<>
    <Student name="Sandra"/>
    <Student name="Linus" age={29} isStudent={false}/>
    <Student name="Laura" age={31} isStudent={true}/>
    <Student age={26}/>
    <Student name="martin" isStudent={true}/>
    <Student />
  </>);
}

export default App
```

- The *App* component renders multiple *Student* components.
- Some instances do not receive all props (*name, age, isStudent*).
- If a prop is not passed, the component uses default values.

### Student.jsx
```javascript
import PropTypes from 'prop-types';

function Student({ name = "Guest", age = 0, isStudent = true }) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
```

- The *Student* component receives props for *name, age, and isStudent*.
- Default values are assigned directly in the function parameter list.
- PropTypes validate the type of each prop during development, helping catch errors.

### *Student.propTypes* and What It Does
*Student.propTypes* is a special property on the Student component where I defined the expected types of its props.

Example in this project:
```javascript
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};
```

This tells React to check during development that:
- *name* is a string
- *age* is a number
- *isStudent* is a boolean

If the parent component passes a wrong type (like a number for name), React will show a warning in the console. This helps catch bugs early and documents the component's expected inputs.


## Challenge and Solution
One challenge I faced was that using the classic *Student.defaultProps* syntax for default props did not work as expected in my functional component. I solved this by switching to default values directly in the function parameter destructuring.
Initially, I tried to use:
```javascript
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: true,
};
```
but found it was not working as expected with functional components in my React environment.

I solved this by defining default prop values directly in the function parameters:

```javascript
function Student({ name = "Guest", age = 0, isStudent = true }) { ... }
```

## What I Learnt
- How to pass props to React components
- How to use PropTypes to validate prop types and improve code quality
- The best practice of setting default props via function parameter defaults in functional components