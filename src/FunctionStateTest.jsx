import { useState } from "react"

function FunctionStateTest() {
    const[name, setName] = useState("Dhanushka inside function");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const changeName = () =>{
        setName("Changed tha name using arrow function and setState")
    }
    
    function changeNameFunction() {
        setName("Changed tha name using function")
    }
    
    const logInClick = () =>{
        setIsLoggedIn(true);
    }
    
    const logOutClick = () =>{
        setIsLoggedIn(false);
    }

    return(
        <>
            <p>======================================</p>
            <p>Name: {name}</p>
            <button onClick={changeNameFunction}>Change Name</button>
            <button onClick={changeName}>Change Name using Function</button>

            <p>======================================</p>
            <p>{isLoggedIn ? "Logged In" : "Logged Out"}</p>
            {!isLoggedIn ? (
                <button onClick={logInClick}>Log In</button>
            ) : (
                <button onClick={logOutClick}>Log Out</button>
            )}
        </>
    )
}

export default FunctionStateTest