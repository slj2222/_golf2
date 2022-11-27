import React from "react";
import CalendarContainer from "./CalendarContainer";

export default function HomeContainer({ allTeeDays }) {

    const mapAllTeeDays = allTeeDays.map(day => (
        <CalendarContainer key={day} day={day}/>
    ))
    return (
        <div className="outer-flex-column">
            <div></div>
            <div className="outer-flex-row four">
                {mapAllTeeDays}
            </div>
            
        </div>
    )
}