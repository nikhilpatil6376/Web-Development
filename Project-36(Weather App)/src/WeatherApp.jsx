import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 37.81,
        humidity: 36,
        temp: 35.99,
        tempMax: 35.99,
        tempMin: 34.94,
        weather: "smoke",
    });

    let updateInfo= (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div className="weatherApp">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
};