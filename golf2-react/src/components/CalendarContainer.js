import React from "react";
import { Link } from "react-router-dom";

export default function CalendarContainer({ day }) {
    // console.log(typeof(day))
    // const dayToString = day.toLocaleDateString()
    // console.log(day.toDateString().substring(0,3))
    

    return (
        <div className="week-time-card bold">
            <Link to={`/calendar/${day.toLocaleDateString().replaceAll('/', '-')}`}>
                {/* <span>{day.toDateString()}</span> */}
                <div className="white">{day.toDateString().substring(0,3)}</div>
                <div className="white-light">{day.toDateString().substring(4)}</div>
            </Link>
            
        </div>
    )
}