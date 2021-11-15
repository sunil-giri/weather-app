import React, { useState } from "react";
import "../styles/Search.css";
import axios from "axios";
import Card from "./Card";

async function fetchWeatherData(input, setState) {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_API_KEY}`
  );
  setState(res.data);
}

function Search() {
  const [state, setState] = useState(null);
  const [input, setInput] = useState("");
  console.log(state);
  return (
    <div className="main-container">
      <div className="search">
        <input
          type="text"
          placeholder="Search City"
          className="search"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => fetchWeatherData(input, setState)}
        >
          Search
        </button>
      </div>
      {state !== null ? <Card data={state} /> : null}
    </div>
  );
}

export default Search;
