import React from "react";

export default function DayTimeCard({ time }) {
    // console.log(new Date(time))

    return (
        <div>
            {/* <Link to={``} */}
            {time.toTimeString()}
        </div>
    )
}