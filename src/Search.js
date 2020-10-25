import React, { useState } from "react";
import axios from "axios";
import { MDBCol, MDBIcon } from "mdbreact";
import DisplayWeatherData from "./DisplayWeatherData"
import WeatherForecast from "./WeatherForecast"
import "./Search.css";

const SearchPage = (props) => {
  //let searchedCity = props.city
  let [newCity, setNewCity] = useState(props.city)
  let [loaded, setLoaded] = useState(true)
      let [forecast, setForecast]=useState(null)

  let [weatherData, setWeatherData] = useState({
    city : props.city,
    temp: 19,
    wind: 29,
    humidity: 34,
    description: "clear",
    iconId: "500",
    //dt: 1603127287
  });
 
  function updateCity(event) {
    event.preventDefault();
    setNewCity(event.target.value)
    setLoaded(false)  
  }
   function updateInfo(response) {
    setWeatherData({
      city: response.data.name,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconId: response.data.weather[0].id,
      //dt: response.data.dt
    });
     setLoaded(true)
    //console.log(response)
    //console.log(searchedCity)
  }
  function getForecast(response){
        setForecast(response.data)
        
  }
  function handleSearch(event) {
    event.preventDefault();
    if (!loaded){
      const apiKey = "9154daef331ecbea43e8a26eb1a85f04";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(updateInfo);
    let link = `https://api.openweathermap.org/data/2.5/forecast?q=${newCity}&appid=${apiKey}&units=metric`;
    axios.get(link).then(getForecast);
    }
    
  }
  return (
    <div>
      <MDBCol md="10">
        <div className="input-group md-form form-sm form-1 pl-0" onChange={updateCity}>
          <input
            className="form-control my-0 py-1"
            type="text"
            placeholder="Enter a city ..."
            aria-label="Search"
          />
          <div className="input-group-prepend">
            <span className="input-group-text purple lighten-3" id="basic-text1">
              <MDBIcon className="text-white" icon="search" onClick={handleSearch} />
            </span>
          </div>
        </div>
      </MDBCol>
      <DisplayWeatherData data = {weatherData}/>
      <WeatherForecast data = {forecast}/>
    </div>
    
  );
};

export default SearchPage;
