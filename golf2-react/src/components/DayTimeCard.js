import React from "react";
import { useParams, Link } from "react-router-dom";

export default function DayTimeCard({ time }) {
    // console.log(new Date(time))
    
    const {id} = useParams()

    const options = {
        minute: '2-digit',
        hour: 'numeric',
    }

    const timeFormatted = time.toLocaleString("en-us", options)
    

    return (
        <div>
            <Link to={`/calendar/${id}/${timeFormatted}`} state={{ from: `${id}`}}>
                {timeFormatted}
            </Link>
        </div>
    )
}