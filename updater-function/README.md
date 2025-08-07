# React updater function
- updater function is a function passed as an argument to setState() usually
- ex. setYear(arrow function)
- Allow for safe updates based on the previous state
- Used in multiple state updates and asynchronous functions

## Demostration of React updater function

This is a small React project demonstrating how **multiple state updates** using the `useState` **updater function** are **batched and queued** in React.

### Project Goal

The main aim of this project was to understand how React handles **state updates** that depend on **previous state**, particularly when **multiple updates** are made in one function. It highlights the importance of using the **functional updater pattern** (`setState(prev => newValue)`).

## What It Demonstrates

- The **correct use** of the `setCount(c => c + x)` updater function
- How **React batches updates** and executes them **in order**
- The difference between **direct** and **functional** state updates


### Code:

```jsx
import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  function increment() {
    // Each update uses the previous state value
    setCount(c => c + 1);
    setCount(c => c + 2);
    setCount(c => c + 4);
    setCount(c => c + 2);
    setCount(c => c + 3);
  }

  function decrement() {
    setCount(c => c - 1);
    setCount(c => c - 3);
    setCount(c => c - 5);
  }

  function reset() {
    setCount(() => 0); // Correct way to reset using updater
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

## Why I Used the Updater Function
- If I wrote the *increment* function like this instead:

```jsx
  function increment() {
    setCount(c + 1);
    setCount(c + 2);
    setCount(c + 4);
    setCount(c + 2);
    setCount(c + 3);
  }
```
React would not add them together because React **batches** these updates and uses the** same stale value** (*count*) for all three calls. So **only the last update would win**, and the others would be overwritten.

The updater function (*setCount(c => c + x)*) solves this by ensuring **each update is based on the latest state**, even within the same event.

## What I Learnt from React updater function
- React queues multiple state updates in the same render cycle
- Direct state updates can cause unexpected results
- Use the functional updater form when the new state depends on the old state
- It's good practice to treat state updates like pure functions