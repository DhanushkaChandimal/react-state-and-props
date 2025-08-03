import { useState } from "react"

function FunctionStateTest() {
    const[name, setName] = useState("Dhanushka inside function");
    
    const changeName = () =>{
        setName("Changed tha name using arrow function and setState")
    }
    
    function changeNameFunction() {
        setName("Changed tha name using function")
    }

    return(
        <>
            <p>======================================</p>
            <p>Name: {name}</p>
            <button onClick={changeNameFunction}>Change Name</button>
            <button onClick={changeName}>Change Name using Function</button>
        </>
    )
}

export default FunctionStateTest