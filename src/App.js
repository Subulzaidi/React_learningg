import React, { useEffect, useState } from "react";

const App = () => {
  const [search, setseacrh] = useState("Karachi");
  const [city, setcity] = useState("");
  const [temp, settemp] = useState(0);
  const [humidiy, sethumidiy] = useState(0);
  const [max, setmax] = useState(0);
  const [min, setmin] = useState(0);

  const addCity = () => {
    if (city === "") {
      alert("Please enter the city name!!!");
    } else {
      setseacrh(city);
      console.log(city);
    }
  };
  const newCity = (e) => {
    setcity(e.target.value);
  };

  useEffect(() => {
    async function weather() {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=5dc2998c93279722e6a408b0d8f4d0bf`;
        const fetchdata = await fetch(url);
        const res = await fetchdata.json();
        settemp(res.main.temp);
        sethumidiy(res.main.humidity);
        setmax(res.main.temp_max);
        setmin(res.main.temp_min);

        console.log("responded");
      } catch {
        console.log("loading");
      }
    }
    weather();
  });

  return (
    <>
      <div>
        <input
          type="search"
          className="search-bar "
          placeholder="Enter your city.."
          value={city}
          onChange={newCity}
        />
        <button className="searchbar" type="submit" onClick={addCity}>
          🔍
        </button>
        <div className="main">
          <img
            className="w-img"
            src="https://o.remove.bg/downloads/dab6e57a-7f25-4c4d-b338-80673c4b0c94/unnamed-removebg-preview.png"
          />
          <h1 className="city">
            {search}
            <br />
            <span className="temp">{temp}°C</span>
          

          </h1>
          <span className="temp">Humidity:{humidiy}</span>
          <span className="temp"  >
              temp-min:{min} 
            </span>
            <span className="temp"  >
              temp-max:{max} 
            </span>
        </div>
      </div>
    </>
  );
};

export default App;
