import React from "react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function MyReservationDetailedCard() {

    const [currentReservation, setCurrentReservation] = useState([])

    const { id } = useParams()
    const navigate = useNavigate()
    const now = new Date()
    console.log(now)

    useEffect(() => {
        fetch(`http://localhost:3001/myreservation/${id}`)
            .then(res => res.json())
            .then(data => setCurrentReservation(data))
    }, [id])


    function handleCancelReservation() {
        fetch(`http://localhost:3001/reservations/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        navigate('/reservations')
    }

    console.log(currentReservation)

    if (new Date(currentReservation.reservation_timestamp).valueOf() < now.valueOf()) {


        return (
            <div>
                {currentReservation.reservation_timestamp}
                
            </div>
        )
    }

    return (
        <div>
            {currentReservation.reservation_timestamp}
            <button onClick={handleCancelReservation}>Cancel Reservation</button>
        </div>
    )
}