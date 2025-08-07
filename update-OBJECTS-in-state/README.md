# React Object State Handling with Updater Function

This project demonstrates how to properly update **nested object state** in React using the **updater function** form of `useState`. It focuses on managing a `car` object with properties like `year`, `make`, and `model`, and updating them through user input.


## Project Goal

- The main goal of this project was to learn how to **safely update parts of an object in state** (without overwriting the rest) using **functional state updates**. This is important in React because direct updates can lead to stale or partial state.
- I also reinforced my understanding of updater functions.


## Code

```jsx
import React, { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2020,
    make: "Audi",
    model: "SQ5"
  });

  function handleYear(event) {
    setCar(c => ({ ...c, year: event.target.value }));
  }

  function handleMake(event) {
    setCar(c => ({ ...c, make: event.target.value }));
  }

  function handleModel(event) {
    setCar(c => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
      
      <input type="number" value={car.year} onChange={handleYear} /> <br />
      <input type="text" value={car.make} onChange={handleMake} /> <br />
      <input type="text" value={car.model} onChange={handleModel} />
    </div>
  );
}

export default MyComponent;
```

### Why I used the updater function
```jsx
setCar(c => ({ ...c, year: newValue }));
```

This pattern ensures:
- I working with the most recent state
- I avoided stale closures or accidental overwrites
- I correctly preserved other properties (like make and model) by spreading ...c

If I did:

```jsx
setCar({ year: newValue });
```

I would **overwrite the entire** *car* **object**, losing *make* and *model*.

## What I Learnt
- How to manage and update state when it holds an object
- Why the functional form of *setState* (*setState(prev => ...)*) is safer when updating based on previous state
- The importance of spreading the old object to retain unchanged fields
- How inputs can be controlled using values from an object in state