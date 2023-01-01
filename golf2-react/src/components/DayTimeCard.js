import React from "react";
import { useParams, Link } from "react-router-dom";

export default function DayTimeCard({ timeObj, apiReservations }) {
    // console.log(new Date(time))
    
    const {id} = useParams()

    const options = {
        minute: '2-digit',
        hour: 'numeric',
    }

    const timeFormatted = timeObj.time.toLocaleString("en-us", options)
    let spotsAvailable = ''    

    if (timeObj.spotsAvailable === 0) {
        spotsAvailable = 'Not available'

        return (
            <div className="day-time-card">
    
                    <div className="white-light">
                        {timeFormatted}
                    </div>
                    <div className="white">
                        {spotsAvailable}
                    </div>
    
            </div>
        )

    } else {
        spotsAvailable = `Players: ${timeObj.spotsAvailable}`

        return (
            <div className="day-time-card">
                <Link to={`/calendar/${id}/${timeFormatted}`} state={{ from: `${id}`}}>
                    <div className="white-light">
                        {timeFormatted}
                    </div>
                    <div className="white">
                        {spotsAvailable}
                    </div>
                </Link>
            </div>
        )
    }

    
}