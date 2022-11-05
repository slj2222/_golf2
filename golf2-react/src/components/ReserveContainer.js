import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";


export default function ReserveContainer({ currentUser }) {
    // console.log(currentUser.user.id)
    const defaultPlayers = 1
    const [numberOfPlayers, setNumberOfPlayers] = useState(defaultPlayers)
    const [errors, setErrors] = useState([])
    const { id } = useParams()
    console.log(id)
    console.log(new Date(window.location.pathname))

    const location = useLocation()
    const { from } = location.state
    console.log(from)
    const reservationDateString = new Date(`${from} ${id}`).toString()
    console.log(reservationDateString)

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
                    user_id: currentUser.user.id,
                    reservation_timestamp: reservationDateString,
                    number_of_players: numberOfPlayers
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
        </div>
    )
}