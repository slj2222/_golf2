import React, { useState } from "react";

export default function Login({ handleLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [errors, setErrors] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        let user = {
            username: username,
            email: emailAddress,
            password: password
          }
        // console.log(username)
        // console.log(password)
        // console.log(emailAddress)
        fetch("http://localhost:3001/login", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user }),
        }).then(res => {
            if (res.ok) {
                console.log(res)
                res.json().then(data => handleLogin(data))
                // this.props.history.push('/')
            } else {
                // res.json().then(data => setErrors(data))
            }
        })
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
                    {/* or <Link to='/signup'>sign up</Link> */}
                    {errors}
                </div>
            </form>
        </div>
    )
}