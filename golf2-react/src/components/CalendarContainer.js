import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import  partlyCloudy from "../public/icons/clear-sky.png"

export default function CalendarContainer({ day }) {
    console.log(day.icon)
    // const dayToString = day.toLocaleDateString()
    // console.log(day.toDateString().substring(0,3))

    let icon = ''
    let alt = ''
    if (day.icon === 'partly-cloudy-day') {
        icon = 'icons/cloudy-day.png'    
        alt = 'partly-cloudy'
    } else if (day.icon === 'rain') {
        icon = 'icons/lighting.png'
        alt = 'stormy'
    } else if (day.icon === 'clear-day') {
        icon = 'icons/sunny-color.png'
        alt = 'sunny'
    } else if (day.icon === 'snow') {
        icon = 'icons/snowflake.png'
        alt = 'snow'
    } else if (day.icon === 'cloudy') {
        icon = 'icons/cloud.png'
        alt = 'cloudy'
    }
    
    const low = Math.trunc(day.low)
    const high = Math.trunc(day.high)
  
    return (
        <div className="week-time-card bold">
            <Link to={`/calendar/${day.date.toLocaleDateString().replaceAll('/', '-')}`}>
                {/* <span>{day.toDateString()}</span> */}
                <div className="white">{day.date.toDateString().substring(0, 3)}</div>
                <div className="white-light">{day.date.toDateString().substring(4)}</div>
                
                <img className="icon" src={icon}  alt={alt}/>
                
                <div>
                <span className="temperature">{low}°</span>
                {' '}
                <span className="temperature">{high}°</span>
                </div>

            </Link>

        </div>
    )
}