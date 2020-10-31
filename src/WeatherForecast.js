import React from "react"
import DisplayForecast from "./DisplayForecast"
import WeatherIcon from 'react-icons-weather';
import "./WeatherForecast.css"

export default function WeatherForecast(props){
    let futureIconId = ["200", "500", "500", "500", "200", "200", "200", "200"]
    let futureTemp = [19, 20, 21, 19, 18, 18, 17, 17]
    let date = new Date()
    /*eslint no-extend-native: ["error", { "exceptions": ["Date"] }]*/
    Date.prototype.addHours = function(h) { 
            this.setTime(this.getTime() + 
                         (h * 60 * 60 * 1000)); 
            return this.getHours(); 
        } 
   
       if(props.data !== null){ return(
           <div className="box">
               <ul>
                { props.data.list.slice(0,8).map(function(item,index){ 
                    return(
                        <li key={index}>
                            <DisplayForecast data={item}/>   
                        </li>        
                        )
                         }
                    )
                }  
                </ul>
           </div>
    )
       } else {return(
           <div className="box">
                <ul>
                { futureIconId.map(function(code,index){ 
                    return(
                        <li key={index}>
                            <div>{date.addHours(3)}:00</div>
                            <div> <WeatherIcon name="owm" iconId={code} flip="horizontal" rotate="90" /></div>
                            <div>{futureTemp[index]}°C</div>
                        </li>        
                        )
                         }
                    )
                }  
                </ul>
           </div>
       )}
}