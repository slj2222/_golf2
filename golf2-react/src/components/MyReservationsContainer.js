import { useEffect, useState } from "react";
import React from "react";
import MyReservationCard from "./MyReservationCard";

export default function MyReservationsContainer({ currentUser }) {
    // console.log(currentUser)
    const [myReservations, setMyReservations] = useState([])
    // console.log(myReservations)
    const currentTime = Date.now()

    useEffect(() => {
        
        fetch(`http://localhost:3001/myreservations/?u=${currentUser.user.id}`)
            .then(res => res.json())
            .then(data => setMyReservations(data.filter(reservation => new Date(reservation.reservation_timestamp) > currentTime)))
    }, [currentUser])

    function showCurrent() {
        fetch(`http://localhost:3001/myreservations/?u=${currentUser.user.id}`)
            .then(res => res.json())
            .then(data => setMyReservations(data.filter(reservation => new Date(reservation.reservation_timestamp) > currentTime)))
    }

    function showHistory() {
        fetch(`http://localhost:3001/myreservations/?u=${currentUser.user.id}`)
            .then(res => res.json())
            .then(data => setMyReservations(data.filter(reservation => new Date(reservation.reservation_timestamp) < currentTime)))
    }

    
    const mapMyReservations = myReservations.map(reservation => (
        <MyReservationCard key={reservation.id} reservationId={reservation.id} reservationTimeStamp={reservation.reservation_timestamp} />
    ))
    
    return (
        <div className="flex-end">
            <div className="button-container">
                <div>
                    <button onClick={showCurrent}>Current</button>
                </div>
                <div>
                    <button onClick={showHistory}>History</button>
                </div>
            </div>
            <div className="inner-flex-reservation">
                {mapMyReservations}
            </div>
            
        </div>
    )
}