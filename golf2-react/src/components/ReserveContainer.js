import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";


export default function ReserveContainer({ currentUser }) {
    // console.log(currentUser.user.id)
    const defaultPlayers = 1
    const [numberOfPlayers, setNumberOfPlayers] = useState(defaultPlayers)
    const [errors, setErrors] = useState([])
    const { id } = useParams()
    // console.log(id)
    const url = window.location.pathname.slice(10)
    console.log(url)
    const urlRemoveEnd = url.slice(0, -5)
    console.log(urlRemoveEnd)
    const urlRemoveSpecial = urlRemoveEnd.replace(/[&/\\#,+()$~%.'"*?<>{}]/g, ', ')
    console.log(urlRemoveSpecial)

    const thisTeeTime = (new Date(urlRemoveSpecial))
    const [thisDayApiTeeTimes, setThisDayApiTeeTimes] = useState([])

    const location = useLocation()
    const { from } = location.state
    // console.log(from)
    const reservationDateString = new Date(`${from} ${id}`).toString()
    // console.log(reservationDateString)

    const timestampString = id.toString()
    // console.log(timestampString)

    const navigate = useNavigate();

    useEffect(() => {

        fetch(`http://localhost:3001/reservations/?q=${thisTeeTime}`)
            .then(res => res.json())
            .then(data => setThisDayApiTeeTimes(data))

        // apiReservations.forEach(el => {
        //     // console.log(typeof(el.reservation_timestamp))
        //     let timestamp = el.reservation_timestamp
        //     // console.log(timestamp)
        //     apiReservationTimes.push(timestamp)
        // })

        // console.log(apiReservationTimes[0])
    }, [])

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
                    navigate('/reservations')
                }
            })
    }

    console.log(thisDayApiTeeTimes)

    let totalPlayersThisTime = 0

    thisDayApiTeeTimes.forEach(time => {
        totalPlayersThisTime = totalPlayersThisTime + time.number_of_players
    })

    console.log(totalPlayersThisTime)

    if (totalPlayersThisTime === 4) {
        return (
            <div>
                This time is not available
            </div>
        )
    } else if (totalPlayersThisTime === 3) {
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
                        </select>
                    </div>
                    <button type="sumbit">Confirm Reservation</button>
                </form>
            </div>
        )
    } else if (totalPlayersThisTime === 2) {
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
                        </select>
                    </div>
                    {numberOfPlayers === "2" ? (
                        <div>
                            <select>
                                <option>select a friend</option>
                            </select>
                        </div>
                    ) : null}
                    <button type="sumbit">Confirm Reservation</button>
                </form>
            </div>
        )
    } else if (totalPlayersThisTime === 1) {
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
                    ) : null}
                    <button type="sumbit">Confirm Reservation</button>
                </form>
            </div>
        )
    } else {
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
                                <option>select a 2nd friend</option>
                            </select>
                        </div>
                    ) : numberOfPlayers === "4" ? (
                        <div>
                            <select>
                                <option>select a friend</option>
                            </select>
                            <select>
                                <option>select a 2nd friend</option>
                            </select>
                            <select>
                                <option>select a 3rd friend</option>
                            </select>
                        </div>
                    ) : null}
                    <button type="sumbit">Confirm Reservation</button>
                </form>
            </div>
        )
    }

}