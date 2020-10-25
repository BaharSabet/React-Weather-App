import React from "react";
import WeatherIcon from 'react-icons-weather';
import DisplayTemp from "./DisplayTemp"
import FormatDate from "./FormatDate"



export default function DisplayWeatherData(props){
    return(
        <div className="App-body">
          <div className="row">
            <div className="col-6 main-info">
              <div className="time-date">
                <h1>{props.data.city}</h1>
                <div className="current-time">
                    <FormatDate />    
                </div>
                <div className="description">
                    {props.data.description} {""}
                    <span className="icon">
                 <WeatherIcon name="owm" iconId={props.data.iconId} flip="horizontal" rotate="90" />
               </span>
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="Temp">
                <span className="temp">               
                  <DisplayTemp temperature = {props.data.temp} unit = "celsius" iconId={props.data.iconId}/>
                </span>
              </div>
              <div />
            </div>
            <div className="col-6">
              <div className="more-info">
                <div className="wind">
                  Wind: <span id="wind-speed">{Math.round(props.data.wind)}</span>
                  <span id="wind-unit"> km/h</span>
                </div>

                <div className="humidity">
                  Humidity: <span id="humidity">{props.data.humidity}</span>%
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}