import React from "react";
import { Link, useParams } from "react-router-dom";

export default function MyReservationCard({ reservationTimeStamp, reservationId }) {
    const { id } = useParams()
    return (
        <div>
            {reservationTimeStamp}
            <div>
                
                    <Link to={`/reservations/${reservationId}`}>
                        <button>
                            view / edit
                        </button>
                    </Link>
                
            </div>
        </div>
    )
}