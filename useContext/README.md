# useContext React Hook
useContext allows us to share values between multiple leves of components without passing props through each level.
- In this project, I created a context called *UserContext* in *ComponentA* and provided it with a value (*user*). This value was then consumed in deeply nested components (*ComponentC* and *ComponentD*) using the useContext hook.
- By doing this, I avoided **prop drilling**. The process of passing props through components that do not need to use the data themselves, just to reach the components that do.

## Steps Taken To Use *useContext* in React

**Provider Component**  
1. import {createContext} from 'react';
2. Export const MyContext = createContext();  
3. <MyContext.Provider> value={value}  
    `<child />`  
<MyContext.Provider>   

**Consumer Component**  
1. import React, {useContext} from 'react';  
   import { MyContext } from './ComponentA';
2. const value = useContext(MyContext)

**Step 1: Create *ComponentA* and Set Up Context**  
I started by building the top-level component called *ComponentA*. In this component:
- I used the *useState* hook to create a *user* state with the value "*Linus*".
- I created a context using *createContext()*.
- I used the *UserContext.Provider* to wrap child components and passed the *user* state as its value.



```jsx
import React, {useState, createContext} from "react"   
import ComponentB from "./ComponentB"

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Linus")

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA
```

**Step 2: I Created *ComponentB***  
Next, I created *ComponentB*. This component doesn’t need the context directly, so it simply renders *ComponentC*.

```jsx
import ComponentC from "./ComponentC"

function ComponentB(){

    return(
        <div className="box">
            <h1>Component B</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB
```

**Step 3: I Created *ComponentC* and Used the Context**  
In *ComponentC*, I needed to access the *user* value from the context. To do this:
- I imported *useContext* and *UserContext*.
- I used *useContext(UserContext)* to get the current value of *user*.
- I also rendered *ComponentD* from here.

```jsx
import React, {useContext} from "react"
import { UserContext } from "./ComponentA"
import ComponentD from "./ComponentD"

function ComponentC(){

    const user = useContext(UserContext)

    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    )
}

export default ComponentC
```

**Step 4: I Created *ComponentD* and Used the Context Again**  
Finally, in *ComponentD*, I accessed the same context using *useContext* and displayed the user value one last time.

```jsx
import React, {useContext} from "react"
import { UserContext } from "./ComponentA"

function ComponentD(){

    const user = useContext(UserContext)

    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}

export default ComponentD
```

## Why *useContext* is Necessary Instead of Prop Chaining:  
Without *useContext*, I would have needed to pass the *user* value through every intermediate component (like ComponentB), even if those components didn’t need to use it. Prop chaining or prop drilling, can make the code harder to read, maintain, and scale especially as the application grows larger.

By using useContext, I can:
- Directly access shared data in any component that needs it, no matter how deep it is in the component tree.
- Keep intermediate components cleaner since they don't have to accept or forward props unnecessarily.
- Make state management more centralized and efficient.

## What I Learnt
- How to use *createContext* to create a shared data store.
- How to provide context data using `<UserContext.Provider>`.
- How to consume context data in any child component using *useContext*.
- The benefit of using *useContext* over prop drilling, which avoids passing props through intermediate components that don’t need them.

