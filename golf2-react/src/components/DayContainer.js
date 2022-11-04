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
            const thisDayCurrent = Date.now()
            // console.log(thisDayCurrent)
            // console.log("same day")
            const thisDayEarly = new Date(thisDay.setHours(6, 40, 0, 0))
            // console.log(thisDayEarly)
            const tempArr = []
            let n = 28
            for (let i = 0; i < n; i++) {
                const thisDayTimes = thisDayEarly.setMinutes(thisDayEarly.getMinutes() + 20)
                console.log(thisDayTimes)
                // const thisDayTimesString = new Date(thisDayTimes)
                // console.log(typeof(thisDayTimesString))
                // tempArr.push(thisDayTimesString)
                if (thisDayTimes > thisDayCurrent) {
                    const thisDayTimesString = new Date(thisDayTimes)
                    tempArr.push(thisDayTimesString)  
                } else {
                    // TODO: figure out what to do here
                    }
            }
            console.log(tempArr)
            
            setThisDayTeeTimes(tempArr)
            
            
            console.log(thisDayTeeTimes)
            // const filterThisDayCurrent = thisDayTeeTimes.filter(time => time > thisDayCurrent)

            // console.log(filterThisDayCurrent)

        } else {
            getTimes()
        }

    }, [])

    function getTimes() {
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

    // console.log(thisDayTeeTimes)

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