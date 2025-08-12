# React Stopwatch
This is a simple Stopwatch built using React. I created this project to strengthen my understanding of React hooks, especially *useRef, useState, and useEffect*. The stopwatch updates time every 10 milliseconds and supports start, stop, and reset functionalities.

## What I Aimed to Learn from the React Stopwatch Challenge

This project helped me focus on:
- Understanding how *useRef* works and how it's different from *useState*.
- Using *setInterval* and *clearInterval* correctly in a *useEffect*.
- Maintaining time state without triggering unnecessary re-renders.
- Practicing clean component structure and logic encapsulation in React.

### Features
- Start, Stop, and Reset functionality
- Accurate time tracking using system clock and interval correction
- Clean time formatting (MM:SS:MS)
- Efficient state handling using *useRef* to avoid excessive re-renders

**`Code`**
```jsx
import React, {useState, useEffect, useRef} from "react";

function Stopwatch(){

    const [isrunning, setIsrunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isrunning){
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalRef.current);
        }
    }, [isrunning])

    function start(){
        setIsrunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function reset(){ 
        setIsrunning(false);
        setElapsedTime(0);
    }

    function stop(){
        setIsrunning(false);
        console.log(elapsedTime)
    }

    function formatTime(){

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2,0);
        minutes = String(minutes).padStart(2,0);
        seconds = String(seconds).padStart(2,0);
        milliseconds = String(milliseconds).padStart(2,0);

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return(
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
            <div className="controls">
                <button className="start" onClick={start}>Start</button>
                <button className="reset" onClick={reset}>Reset</button>
                <button className="stop" onClick={stop}>Stop</button>
            </div>
        </div>
    )
}

export default Stopwatch
```

### Code Explanation 
**`start()`**  
- When I click *Start*, it sets *isrunning* to *true*.
- I also set *startTimeRef.current* to *Date.now() - elapsedTime* which ensures that if I had paused the stopwatch earlier, it will resume from where it left off.

**`useEffect`**
- The *useEffect* hook watches the *isrunning* state.
- When isrunning becomes true, I use setInterval to update elapsedTime every 10 milliseconds.
- The update logic uses:

```jsx
setElapsedTime(Date.now() - startTimeRef.current)
```

This way, time is always calculated accurately based on the real time difference, not just incrementing a counter.
- When the component unmounts or *isrunning* changes, I clear the interval using *clearInterval()* to avoid memory leaks.

**`stop()`**  
- This sets *isrunning* to false, which stops the interval from running.
- The time remains displayed, but it no longer updates.

**`reset()`**  
- Stops the timer and sets *elapsedTime* back to 0.
- This effectively clears the stopwatch display.

**`formatTime()`**  
This helper function takes elapsedTime (in milliseconds) and breaks it down into:  
- Minutes
- Seconds
- Hundredths of a second  

Then it returns a string in MM:SS:MS format with padding for clean display.  


### How useRef was important
I used useRef in two key places:

**1. startTimeRef:**
- I stored the actual start time using *useRef* to keep it from resetting on every re-render.
- Unlike *useState*, updating a *useRef* value doesn’t trigger a re-render, which is perfect for values like timestamps that I don’t want to display directly.

**2. intervalRef:**
- I used *useRef* to store the interval ID returned by *setInterval()*.
- This allowed me to clear the interval later using *clearInterval(intervalRef.current)*, even outside the interval's scope.

By using *useRef*, I kept mutable values across renders without triggering extra renders, which improved performance and made time tracking more reliable.

### What I Learnt
Through building this, I gained a deeper understanding of:  
- *useRef* vs *useState*: *useRef* is useful to store mutable values that persist across renders without causing a re-render.
- How to clean up intervals properly with *useEffect* to prevent memory leaks.
- How to continue time calculation from where it was paused using *Date.now() - elapsedTime*.