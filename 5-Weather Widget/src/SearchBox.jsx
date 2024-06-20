import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "e4b22e76fb941639ec9dd26b8d82ba73";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      setError(false);
      console.log(result);
      return result;
    } catch (e) {
      throw e;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      let info = await getWeatherInfo();
      updateInfo(info);
      setCity("");
    } catch (e) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          variant="outlined"
          label="City Name"
          required
          value={city}
          onChange={handleChange}
        ></TextField>
        <br />
        <br />
        <Button type="submit" variant="contained">
          SEARCH
        </Button>
      </form>
      <br />
      {error && "No such place in database."}
    </div>
  );
}
