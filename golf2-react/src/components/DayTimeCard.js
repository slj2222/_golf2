import React from "react";
import { useParams, Link } from "react-router-dom";

export default function DayTimeCard({ time, apiReservations }) {
    // console.log(new Date(time))
    
    const {id} = useParams()

    const options = {
        minute: '2-digit',
        hour: 'numeric',
    }

    const timeFormatted = time.toLocaleString("en-us", options)
    

    return (
        <div className="day-time-card">
            <Link to={`/calendar/${id}/${timeFormatted}`} state={{ from: `${id}`}}>
                <div className="white-light">
                    {timeFormatted}
                </div>
            </Link>
        </div>
    )
}