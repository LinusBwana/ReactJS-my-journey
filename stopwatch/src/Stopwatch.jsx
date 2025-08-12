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