import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DayTimeCard from "./DayTimeCard";

export default function DayContainer({ rightNowDateOnly }) {
    // console.log(rightNowDateOnly)

    const { id } = useParams()
    const thisDate = new Date(id).toString()
    // console.log(thisDate)
    const thisDateSlice = thisDate.slice(0,16)
    // console.log(thisDateSlice)
    const thisDay = new Date(id)
    // console.log(new Date(id))

    const [thisDayTeeTimes, setThisDayTeeTimes] = useState([])
    // const [apiState, setApiState] = useState([])
    

    const [apiReservations, setApiReservations] = useState([])
    // console.log(apiReservations)

    // console.log(thisDateSlice)
    useEffect(() => {
        
        fetch(`http://localhost:3001/reservations/?q=${thisDateSlice}`)
            .then(res => res.json())
            .then(data => setApiReservations(data))

            // apiReservations.forEach(el => {
            //     // console.log(typeof(el.reservation_timestamp))
            //     let timestamp = el.reservation_timestamp
            //     // console.log(timestamp)
            //     apiReservationTimes.push(timestamp)
            // })
        
            // console.log(apiReservationTimes[0])
    }, [])

    // console.log(apiState)
    // useEffect(() => {
    //     const tempApiRes = []
    //     console.log(apiReservations)
    //     if (apiReservations.length > 0) {
    //         const apiReservationTimes = apiReservations.map(reservation => reservation.reservation_timestamp) 
    //         // console.log(typeof(apiReservationTimes))    
    //         apiReservationTimes.forEach(time => {
    //             tempApiRes.push(time)
    //         });
    //         setApiState(tempApiRes)
    //         console.log(apiState)
    //     } else {
    //         console.log("else?")
    //     }


    // }, [apiReservations])

    // // console.log(apiReservations)
    // console.log(apiState)










    useEffect(() => {
        //if the day selected is the current day, utilize the current time
        if (thisDay.toString() === rightNowDateOnly.toString()) {
            const thisDayCurrent = Date.now()
            // console.log(thisDayCurrent)
            // console.log("same day")
            const thisDayEarly = new Date(thisDay.setHours(6, 40, 0, 0))
            // console.log(thisDayEarly)
            const tempArr = []
            let n = 28
            for (let i = 0; i < n; i++) {
                const thisDayTimes = thisDayEarly.setMinutes(thisDayEarly.getMinutes() + 20)
                // console.log(thisDayTimes)
                // const thisDayTimesString = new Date(thisDayTimes)
                // console.log(typeof(thisDayTimesString))
                // tempArr.push(thisDayTimesString)
                if (thisDayTimes > thisDayCurrent) {
                    const thisDayTimesString = new Date(thisDayTimes)
                    if (apiReservations.some(el => el.reservation_timestamp === thisDayTimesString.toString())) {
                        
                    } else {
                        tempArr.push(thisDayTimesString)
                    }
                    
                } else {
                    // TODO: figure out what to do here
                }
            }
            // console.log(tempArr)
            setThisDayTeeTimes(tempArr)
            // console.log(thisDayTeeTimes)
            // const filterThisDayCurrent = thisDayTeeTimes.filter(time => time > thisDayCurrent)
            // console.log(filterThisDayCurrent)

        } else {

            const thisDayEarly = new Date(thisDay.setHours(6, 40, 0, 0))
            // console.log(thisDayEarly)
            const tempArr = []
            let n = 28
            for (let i = 0; i < n; i++) {
                const thisDayTimes = thisDayEarly.setMinutes(thisDayEarly.getMinutes() + 20)
                const thisDayTimesString = new Date(thisDayTimes)
                // console.log(thisDayTimesString.toString())
                if (apiReservations.some(el => el.reservation_timestamp === thisDayTimesString.toString())) {
                    // console.log("match")
                } else {
                    tempArr.push(thisDayTimesString)
                }    
            }
            setThisDayTeeTimes(tempArr)
        }

    }, [apiReservations])

    
    
    

    

    // console.log(thisDayTeeTimes)

    const mapThisDayTeeTimes = thisDayTeeTimes.map(time => (
        <DayTimeCard key={time} time={time} />
    ))

    return (
        
        <div className="outer-flex-column">
            <div>
                {id.toString()}
            </div>

            <div className="outer-flex-row">
                {mapThisDayTeeTimes}
            </div>
        </div>
    )
}