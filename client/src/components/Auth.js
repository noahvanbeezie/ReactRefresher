import React from 'react'
import {useState, useEffect} from 'react'
import '../styling/auth.css'

function Auth(){
    const [loginScreen, setLoginScreen] = useState(true);

    const handleSwitch = () => {
        setLoginScreen(!loginScreen)
    }
    return(
        <div className='authContainer'>
            {loginScreen ? 
            (
                <>
                    <h1>Login</h1>
                    <input placeholder='Username'></input>
                    <input placeholder='Password'></input>
                    <button>Submit</button>
                    <a onClick={handleSwitch}>Register instead</a>
                </>
            ) 
            : 
            (
                <>
                    <h1>Register</h1>
                    <input placeholder='Username'></input>
                    <input placeholder='Password'></input>
                    <input placeholder='Confirm Password'></input>
                    <button>Submit</button>
                    <a onClick={handleSwitch}>Login instead</a>
                </>
            )}
        </div>
    )
}

export default Auth