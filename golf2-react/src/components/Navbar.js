import React, { useState } from "react";

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
            <div>
                <span>Home</span>
            </div>
            <div>
                <span>{currentUser.user.username}</span>
                <span>
                    <button onClick={handleClick}>Logout</button>
                </span>
            </div>
        </>
    )
}