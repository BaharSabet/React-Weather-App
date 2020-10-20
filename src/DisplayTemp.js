import React, { useState } from "react"


export default function DisplayTemp(props){

let [unit, setUnit] = useState(props.unit)
    let fahrenheit = (props.temperature * 9 / 5) + 32;
  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit")
  }

  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius")
  }
    if (unit === "celsius")
    {return(
        <div>
           
                  <span className="temperature">{Math.round(props.temperature)}</span>
                  <span className="units">
                    
                      °C
                    {" "}
                    |
                    <a href="#" id="fahrenheit-link" onClick={toFahrenheit}>
                      {" "}
                      °F
                    </a>
                  </span>
        </div>
    )}else{
        return (
        <div>
                  <span className="temperature">{Math.round(fahrenheit)}</span>
                  <span className="units">
                    <a href="#" id="celsius-link" onClick={toCelsius}>
                      °C
                    </a>{" "}
                    |
                   
                      {" "}
                      °F
                
                  </span>
        </div>)}
}