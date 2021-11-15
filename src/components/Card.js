import React, { useEffect, useState } from "react";
import "../styles/Card.css";
import "font-awesome/css/font-awesome.min.css";
import {
  WiSunset,
  WiHumidity,
  WiHail,
  WiStrongWind,
  WiSmoke,
  WiDaySunny,
  WiCloud,
  WiDayHaze,
  WiRain,
  WiDaySunnyOvercast,
} from "react-icons/wi";

function Card({ data }) {
  // console.log(data);
  const [weatherIcon, setWeatherIcon] = useState("");
  useEffect(() => {
    switch (data.weather[0].main) {
      case "Smoke":
        setWeatherIcon(<WiSmoke size="100px" />);
        break;
      case "Clear":
        setWeatherIcon(<WiDaySunny size="100px" />);
        break;
      case "Clouds":
        setWeatherIcon(<WiCloud size="100px" />);
        break;
      case "Haze":
        setWeatherIcon(<WiDayHaze size="100px" />);
        break;
      case "Rain":
        setWeatherIcon(<WiRain size="100px" />);
        break;
      default:
        setWeatherIcon(<WiDaySunnyOvercast size="100px" />);
    }
  }, [data]);
  let sec = data.sys.sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className="container">
      <div className="first">{weatherIcon}</div>
      <div className="second">
        <div className="temp">
          <p>{(data.main.temp - 273.1).toFixed(1)}°C</p>
        </div>
        <div className="climate">{data.weather[0].main}</div>
        <div className="datetime">
          <div className="date">{new Date().toLocaleDateString()}</div>
          <div className="time">{new Date().toLocaleTimeString()}</div>
        </div>
      </div>
      <div className="third">
        <div className="sunset">
          <WiSunset size="50px" style={{ color: "lightgreen" }} />
          <div>
            <p>Sunset</p>
            <p>{timeStr} PM</p>
          </div>
        </div>
        <div className="humidity">
          <WiHumidity size="50px" style={{ color: "lightgreen" }} />
          <div>
            <p>Humidity</p>
            <p>{data.main.humidity}</p>
          </div>
        </div>
        <div className="pressure">
          <WiHail size="50px" style={{ color: "lightgreen" }} />
          <div>
            <p>Pressure</p>
            <p>{data.main.pressure}</p>
          </div>
        </div>
        <div className="speed">
          <WiStrongWind size="50px" style={{ color: "lightgreen" }} />
          <div>
            <p>Speed</p>
            <p>{data.wind.speed}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
