import React from "react";
import CalendarContainer from "./CalendarContainer";
import SideUserCard from "./SideUserCard";
import { useEffect, useState } from "react";

export default function HomeContainer({ allTeeDays, nonPrivateUsers }) {
    console.log(nonPrivateUsers)



    const [weather, setWeather] = useState([])

    useEffect(() => {
        fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/37.26026605853407%2C%20-93.22897560576774?unitGroup=us&include=days&key=B6YZKZVEQNF4LTWNQTTY48TCQ&contentType=json")
            .then(res => res.json())
            .then(data => setWeather(data.days))
    }, [])

    console.log(weather)

    // if (weather.length !== 0) {
    //     const filterWeather = weather.days.filter(days => console.log(day))
    // }


    // ________________________________
    const fullDateArr = []

    

    // console.log(allTeeDays)
    allTeeDays.forEach((teeTimeDay) => {
        // console.log(el.toISOString().split('T')[0])

        weather.forEach((weatherDay) => {
            // console.log(weatherDay.datetime)
            
            if (weatherDay.datetime === teeTimeDay.toISOString().split('T')[0]) {
                console.log('yes')

                const tempArr = {
                    'date' :  new Date(teeTimeDay.setHours(0, 0, 0, 0)),
                    'description' : weatherDay.description,
                    'icon' : weatherDay.icon,
                    'precipProb' : weatherDay.precipprob,
                    'currentTemp' : weatherDay.temp,
                    'high' : weatherDay.tempmax,
                    'low' : weatherDay.tempmin
                }

                fullDateArr.push(tempArr)
            }
            
            
        })
    })






    const mapAllTeeDays = fullDateArr.map(day => (
        // console.log(day)
        // console.log(new Date(day).toLocaleDateString().replaceAll("/", "-").reverse())
        <CalendarContainer key={day.date} day={day} />
    ))




    // ________________________________
    // const mapAllTeeDays = allTeeDays.map(day => (
    //     // console.log(new Date(day).toLocaleDateString().replaceAll("/", "-").reverse())
    //     <CalendarContainer key={day} day={day} />
    // ))


    if (nonPrivateUsers.length !== 0) {
        const mapNonPrivateUsers = nonPrivateUsers.users.map(user => (
            <SideUserCard key={user.id} user={user} />
        ))

        return (
            <div className="main-outer">
                <div className="outer-flex-column">
                    <div></div>
                    <div className="outer-flex-row four">
                        {mapAllTeeDays}
                    </div>

                </div>
                <div className="side-flex-column">
                    {mapNonPrivateUsers}
                </div>
            </div>
        )
    } else {

        return (
            <div className="main-outer">
                <div className="outer-flex-column">
                    <div></div>
                    <div className="outer-flex-row four">
                        {mapAllTeeDays}
                    </div>

                </div>
                <div className="side-flex-column">
                    no members
                </div>
            </div>
        )
    }


}