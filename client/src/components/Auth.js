import React from 'react'
import {useState, useEffect} from 'react'

function Auth(){
    const [loginScreen, setLoginScreen] = useState(true);

    const handleSwitch = () => {
        setLoginScreen(!loginScreen)
    }
    return(
        <div>
            {loginScreen ? 
            (
                <>
                <h1>Login</h1>
                <a onClick={handleSwitch}>Register instead</a>
                </>
            ) 
            : 
            (
                <>
                <h1>Register</h1>
                <a onClick={handleSwitch}>Login instead</a>
                </>
            )}
        </div>
    )
}

export default Auth