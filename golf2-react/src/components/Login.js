import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ handleLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (username !== '' && emailAddress !== '' && password !== '' ){
            let user = {
                username: username,
                email: emailAddress,
                password: password
            }
            // console.log(username)
            // console.log(password)
            // console.log(emailAddress)
            // TODO: credentials that were typed in to login display in the URL
            fetch("http://localhost:3001/login", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user }),
            }).then(res => res.json())
            .then(data => {
                if (data.errors) {
                    setErrors(data.errors)
                } else {
                    handleLogin(data)
                }
            // TODO: not working when incorrect login
            // navigate('/')
                // }
            })
        } else {
            console.log('must fill out all fields')
        }
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    placeholder="email"
                    type="text"
                    name="email"
                    value={emailAddress}
                    onChange={e => setEmailAddress(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button placeholder="submit" type="submit">
                    Log In
                </button>
                <div>
                    or <Link to='/signup'>sign up</Link>     
                </div>
                {errors ? (
                        <div> {errors} </div>
                    ) : (
                        <div> </div>
                    )}
            </form>
        </div>
    )
}