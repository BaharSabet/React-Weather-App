import React from "react"

export default function FormatDate(){
   let date = new Date()
    let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let day = days[date.getDay()]
    let hour = date.getHours()
    let minutes = date.getMinutes()
    return (<div>
        {day} {hour<10 ? (`0${hour}`):(hour)}:{minutes<10 ? (`0${minutes}`):(minutes)}
    </div>)
}