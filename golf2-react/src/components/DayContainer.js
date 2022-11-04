import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DayTimeCard from "./DayTimeCard";

export default function DayContainer({ rightNowDateOnly }) {
    // console.log(rightNowDateOnly)

    const { id } = useParams()
    // console.log(id)
    const thisDay = new Date(id)
    // console.log(new Date(id))

    const [thisDayTeeTimes, setThisDayTeeTimes] = useState([])

    useEffect(() => {

        if (id.toString() === rightNowDateOnly.toString()) {
            console.log("same day")
            const thisDayCurrent = new Date()
            console.log(thisDayCurrent)


        } else {
            const thisDayEarly = new Date(thisDay.setHours(6, 40, 0, 0))
            // console.log(thisDayEarly)
            const tempArr = []
            let n = 28
            for (let i = 0; i < n; i++) {
                const thisDayTimes = thisDayEarly.setMinutes(thisDayEarly.getMinutes() + 20)
                const thisDayTimesString = new Date(thisDayTimes)
                // console.log(typeof(thisDayTimesString))
                tempArr.push(thisDayTimesString)
            }
            setThisDayTeeTimes(tempArr)
        }

    }, [id])

    console.log(thisDayTeeTimes)

    const mapThisDayTeeTimes = thisDayTeeTimes.map(time => (
            <DayTimeCard key={time} time={time} />
    ))

    return (
        <>
            <div>
                {id.toString()}
            </div>
            <div>
                ()
                </div>
            <div>
                {mapThisDayTeeTimes}
            </div>
        </>
    )
}