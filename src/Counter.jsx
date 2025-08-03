import { useState } from "react"


function Counter() {
    const[count, setCount] = useState(0);
    const[message, setMessage] = useState("");

    const increaseCount = () =>{
        setCount(count + 1);
        if(count>-2){
            setMessage("")
        }
    }

    const decreaseCount = () =>{
        setCount(count - 1);
        if(count<1){
            setMessage("Negative Value!")
        }
    }

    const resetCount = () =>{
        setCount(0);
        setMessage("")
    }

    return(
        <>
            <p>{count}</p>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
            <p>{message}</p>
        </>
    )
}

export default Counter