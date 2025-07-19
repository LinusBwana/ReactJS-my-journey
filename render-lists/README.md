# rendering lists
This practice project showcases fundamental techniques for rendering lists in React using functional components. It covers how to display arrays and arrays of objects dynamically, including sorting, filtering, and creating reusable components with proper prop validation and styling.

## 1. The *List* component is hardcoded and not reusable.
In this practise, I showcased how to:
1. Render a list from a *simple array*.
2. Render a list from an *array of objects*.
3. Use *.map()* to dynamically create list elements.
4. Use *.sort()* to sort arrays alphabetically and numerically.
5. Use *.filter()* to create subsets of data based on specific conditions.

#### `App.jsx`
```jsx
import List from "./List.jsx";

function App() {
  return (
    <List />
  );
}

export default App;
```

#### `List.jsx`
```jsx
function List(){

    const  students = ["Linus", "Annette", "Melvin", "Caleb", "Victor"];

    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "mango", calories: 47}, 
                    {id: 3, name: "banana", calories: 142}, 
                    {id: 4, name: "orange", calories: 59}, 
                    {id: 5, name: "grapes", calories: 130}, 
                    {id: 6, name: "coconut", calories: 89}];

    // to sort students array
    students.sort();
    const studentNames = students.map((student => <li key={student}>{student}</li>));
    
    // sorting fruits object
    fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC

    const fruitItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);
    
    // filtering fruits object: fruits with low calories
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 90);
    const lowCalFruitItems = lowCalFruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);

    return(
        <>
            <ol>{studentNames}</ol>
            <ol>{fruitItems}</ol>
            <ol>{lowCalFruitItems}</ol>
        </>
    );
};

export default List;
```

### Key Features
1. **Dynamic list rendering** from both primitive and object arrays.
2. **Alphabetical sorting** of strings and objects.
3. **Numerical sorting** and **filtering** for object arrays (via calorie data).
4. Clean and minimal JSX using the **map()** function.


## 2. The *List* component is reusable.
I repeated step one to make the list component reusable. However, I did not include filter and sort.
#### `App.jsx`
```jsx
import List from "./List.jsx";

function App() {
    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "mango", calories: 47}, 
                    {id: 3, name: "banana", calories: 142}, 
                    {id: 4, name: "orange", calories: 59}, 
                    {id: 5, name: "grapes", calories: 130}, 
                    {id: 6, name: "coconut", calories: 89}];

    const vegetables = [{id: 1, name: "carrot", calories: 95},
                    {id: 2, name: "spinach", calories: 37}, 
                    {id: 3, name: "terere", calories: 12}, 
                    {id: 4, name: "cabbage", calories: 69}, 
                    {id: 5, name: "kunde", calories: 13}, 
                    {id: 6, name: "saga", calories: 87}];
    
    return (
        <>  
            {/* use of short-circuiting */}
            {fruits.length > 0 && <List item={fruits} category="Fruits"/>}
            {vegetables.length > 0 && <List item={vegetables} category="Vegetables"/>}    
        </>
    );
}

export default App
```

#### `List.jsx`
```jsx
import PropTypes from 'prop-types';

function List({category="Category", item = []}){


    const listItems = item.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>)
    
    return(
        <>
            <h3 className='list-category'>{category}</h3>
            <ol className='list-items'>{listItems}</ol>
        </>
    );
};

List.propTypes = {
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            calories: PropTypes.number})),
    
};
export default List;
```

## What I Have Learnt
### 1. Rendering Lists in React
- How to render simple arrays and arrays of objects using the *.map()* method.
- Using *key props* in list items to help React optimize rendering.
- Sorting arrays before rendering to display data in a desired order.
- Filtering arrays to conditionally render only relevant items.

### 2. Working with Props and Reusable Components
- Creating reusable components by passing data as props.
- Using *PropTypes* to define expected prop types and validate props in development.
- Setting default prop values using default parameters in functional components or *defaultProps*.