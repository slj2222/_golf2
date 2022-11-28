import React from "react";
import { Link } from "react-router-dom";

export default function MyReservationCard({ reservationTimeStamp, reservationId }) {
    // console.log(typeof(reservationTimeStamp))
    const reservation = new Date(reservationTimeStamp).toLocaleString()
    const currentTime = Date.now()

    if (new Date(reservationTimeStamp) > currentTime) {
        return (
            <div className="reservation-card">
                <div>
                    {reservationTimeStamp.substring(0, 3)}, {reservation}
                    {/* {reservation} */}
                </div>
                <Link to={`/reservations/${reservationId}`}>
                    <button>
                        view / edit
                    </button>
                </Link>
            </div>
        )
    } else {
        return (
            <div className="reservation-card">
                <div>
                    {reservationTimeStamp.substring(0, 3)}, {reservation}
                    {/* {reservation} */}
                </div>
                <Link to={`/reservations/${reservationId}`}>
                    <button>
                        view
                    </button>
                </Link>
            </div>
        )
    }



    
}