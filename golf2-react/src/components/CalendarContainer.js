import React from "react";
import { Link } from "react-router-dom";

export default function CalendarContainer({ day }) {
    // console.log(day)
    return (
        <div>
            <Link to={`/${day}`}>
                <span>{day.toDateString()}</span>
            </Link>
            <div>()</div>
        </div>
    )
}