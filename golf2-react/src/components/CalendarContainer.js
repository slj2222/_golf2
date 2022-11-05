import React from "react";
import { Link } from "react-router-dom";

export default function CalendarContainer({ day }) {
    // console.log(typeof(day))
    // const dayToString = day.toLocaleDateString()
    // console.log(dayToString)
    

    return (
        <div>
            <Link to={`/${day.toLocaleDateString().replaceAll('/', '-')}`}>
                <span>{day.toDateString()}</span>
            </Link>
            <div>()</div>
        </div>
    )
}