import { useEffect, useState } from "react";
import React from "react";
import MyReservationCard from "./MyReservationCard";

export default function MyReservationsContainer({ currentUser }) {
    console.log(currentUser)
    const [myReservations, setMyReservations] = useState([])
    console.log(myReservations)
    
    useEffect(() => {
        
        fetch(`http://localhost:3001/myreservations/?u=${currentUser.user.id}`)
            .then(res => res.json())
            .then(data => setMyReservations(data))

    }, [currentUser])

    const mapMyReservations = myReservations.map(reservation => (
        <MyReservationCard key={reservation.reservation_timestamp} reservationTimeStamp={reservation.reservation_timestamp} />
    ))

    return (
        <div>
            {mapMyReservations}
        </div>
    )
}