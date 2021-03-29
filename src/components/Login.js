import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from './Header'
import './Login.css'


function Login() {
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            history.push('/')
        }
    }, [])

    const [name, setName] = useState("");
    const [password, setPasssword] = useState("")
    const history = useHistory("")



    function login() {
        let item = { name, password }
        let result = {
            name: 'suvankar',
            password: 'suvankar@1996'
        }
        console.warn("result", result)
        localStorage.setItem("user-info", result);
        history.push("/")

    }
    return (
        <>
            <Header />
            <div className='heading'>
            <h1>Login page</h1><br/>
            <div classname="login-form">
                
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} className="text-input" placeholder='enter your username' />
                <br /><br />
                <input type='password' value={password} onChange={(e) => setPasssword(e.target.value)} className="text-input" placeholder='enter your password' />
                <br /><br />
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
            </div>
        </>
    )
}

export default Login
