import React from "react";
import { Link } from "react-router-dom";

export default function CalendarContainer({ day }) {
    // console.log(typeof(day))
    // const dayToString = day.toLocaleDateString()
    // console.log(dayToString)
    

    return (
        <div className="week-time-card">
            <Link to={`/calendar/${day.toLocaleDateString().replaceAll('/', '-')}`}>
                <span>{day.toDateString()}</span>
            </Link>
            
        </div>
    )
}