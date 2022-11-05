import React from "react";
import CalendarContainer from "./CalendarContainer";
import { Outlet } from "react-router-dom";

export default function HomeContainer({ allTeeDays }) {

    const mapAllTeeDays = allTeeDays.map(day => (
        <CalendarContainer key={day} day={day}/>
    ))
    return (
        <div>
            **HOME**
            {mapAllTeeDays}
            <Outlet />
        </div>
    )
}