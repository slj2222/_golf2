import React, { useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";


export default function ReserveContainer({ currentUser }) {
    const defaultPlayers = 1
    const [numberOfPlayers, setNumberOfPlayers] = useState(defaultPlayers)
    const [errors, setErrors] = useState([])
    // const { path } = useLocation()
    // console.log(path)
    console.log(window.location.pathname)
    const { id } = useParams()
    console.log(id)

    const timestampString = id.toString()
    console.log(timestampString)

    function handleSubmit(e) {
        e.preventDefault()

        fetch("http://localhost:3001/reservations", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({

                 }),
            }).then(res => res.json())
            .then(data => {
                if (data.errors) {
                    setErrors(data.errors)
                } else {
                    
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    
                </div>
                <div>

                </div>
                <div>
                    Number of Players: 
                    {/* <input onChange={(e) => setNumberOfPlayers(e.target.value)} /> */}
                    <select onChange={(e) => setNumberOfPlayers(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                        {numberOfPlayers === "2" ? (
                            <div>
                                <select>
                                    <option>select a friend</option>
                                </select>
                            </div>
                        ) : numberOfPlayers === "3" ? (
                            <div>
                                <select>
                                    <option>select a friend</option>
                                </select>
                                <select>
                                    <option>select a friend</option>
                                </select>
                            </div>
                        ) : numberOfPlayers === "4" ? (
                            <div>
                                <select>
                                    <option>select a friend</option>
                                </select>
                                <select>
                                    <option>select a friend</option>
                                </select>
                                <select>
                                    <option>select a friend</option>
                                </select>
                            </div>
                        ) : null}
                        
                <button type="sumbit">Confirm Reservation</button>
            </form>
            <Outlet />
        </div>
    )
}