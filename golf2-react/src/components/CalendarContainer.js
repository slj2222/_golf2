import React from "react";
import { Link } from "react-router-dom";

export default function CalendarContainer({ day }) {
    // console.log(typeof(day))
    // const dayToString = day.toLocaleDateString()
    // console.log(day.toDateString().substring(0,3))
    

    return (
        <div className="week-time-card">
            <Link to={`/calendar/${day.toLocaleDateString().replaceAll('/', '-')}`}>
                {/* <span>{day.toDateString()}</span> */}
                <div>{day.toDateString().substring(0,3)}</div>
                <div>{day.toDateString().substring(4)}</div>
            </Link>
            
        </div>
    )
}