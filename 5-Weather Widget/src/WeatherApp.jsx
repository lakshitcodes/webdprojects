import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 35.05,
    tempMin: 32,
    tempMax: 47,
    humidity: 43,
    feelsLike: 38.26,
    weather: "Haze",
  });
  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App by Lakshit</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
