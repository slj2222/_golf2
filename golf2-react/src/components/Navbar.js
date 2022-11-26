import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar({ handleLogout, currentUser }) {
    // console.log(currentUser)
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
        <>
        <div className="navbar-outer">
            <div>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/reservations">MyReservations</Link>
                </span>
            </div>
            <div>
                <span>{currentUser.username}</span>
                <span>
                    <Link to="/" onClick={handleClick}>Logout</Link>                
                </span>
            </div>
        </div>
        </>
    )
}