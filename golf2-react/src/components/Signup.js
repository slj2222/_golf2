import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup({ handleLogin }) {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (password === confirmPassword) {

            let user = {
                username: username,
                email: emailAddress,
                password: password
            }

            fetch("http://localhost:3001/users", {
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
                } else {
                    // res.json().then(data => setErrors(data))
                    // TODO: not working when incorrect login
                    navigate('/')
                }
            })
        } else {
            // setErrors(["passwords do not match"])
            console.log("passwords do not match")
            
        
        }
    }

    return (
        <div>
            <Link to="/" >
                back to login
            </Link>
            <h1>Sign Up</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    placeholder="email address"
                    type="text"
                    name="email_address"
                    value={emailAddress}
                    onChange={e => setEmailAddress(e.target.value)}
                />
                {/* <input
                    placeholder="first name"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                /> */}
                {/* <input
                    placeholder="last name"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                /> */}
                {/* <input
                    placeholder="membership number"
                    type="text"
                    name="membershipNumber"
                    value={membershipNumber}
                    onChange={e => setMembershipNumber(e.target.value)}
                /> */}
                {/* <input
                    placeholder="phone number"
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />                */}
                <input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    placeholder="password confirmation"
                    type="password"
                    name="password_confirmation"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />

                <button to="/" placeholder="submit" type="submit">
                    Sign Up
                </button>

            </form>
        </div>
    )
}