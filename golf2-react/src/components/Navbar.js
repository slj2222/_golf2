import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar({ handleLogout, currentUser }) {
    console.log(currentUser)
    const [errors, setErrors] = useState('')

    function handleClick() {
        fetch("http://localhost:3001/logout", {
            method: "DELETE",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },

        }).then(res => res.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                handleLogout()
            }
        })
    }


    return (
        
        <div className="navbar-outer">
            <div className="navbar-left">
                <span className="nav-span bold">
                    <Link to="/">HOME</Link>
                </span>
                <span className="nav-span bold">
                    <Link to="/reservations">MY RESERVATIONS</Link>
                </span>
            </div>
            <div className="navbar-right">
                <span className="nav-span bold">{currentUser.user.username}</span>
                <span className="nav-span bold">
                    <Link to="/" onClick={handleClick}>LOGOUT</Link>                
                </span>
            </div>
        </div>
 
    )
}