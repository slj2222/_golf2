import React from "react";

export default function Navbar({ handleLogout, currentUser }) {
    // console.log(currentUser)
    function handleClick() {
        fetch("http://localhost:3001/logout", {
            method: "DELETE",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },

        }).then(res => {
            if (res.ok) {
                console.log(res)
                res.json().then(data => handleLogout())
                // this.props.history.push('/')
            } else {
                // res.json().then(data => setErrors(data))
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