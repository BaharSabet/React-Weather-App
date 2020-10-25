import React from "react"
import WeatherIcon from 'react-icons-weather';

import "./DisplayForecast.css"


export default function DisplayForecast(props){
    function hour(){
        let date = new Date(props.data.dt*1000)
        return (date.getHours())
    }
    let hours = hour()
    return(
        <div>
            <div> {hours<10 ? (`0${hours}`):(hours)}:00</div>
            <div> <WeatherIcon name="owm" iconId={props.data.weather[0].id} flip="horizontal" rotate="90" /></div>
            <div> {Math.round(props.data.main.temp)}°C</div>    
        </div>
    )
}