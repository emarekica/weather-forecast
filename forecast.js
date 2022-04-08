"use strict";

// dependencies
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

// port we are listening on
const port = 3000;

// enable JSON middleware on every route that we create for API
app.use(express.json());
app.use(cors());

//// ---------------------------------------------
// test route

app.get;

//// ---------------------------------------------
//// selecting HTML elements

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

const currentWeatherItemsEl = document.getElementById("current-weather-items");

const timeZoneEl = document.getElementById("time-zone");
const countryEl = document.getElementById("country");

const futureForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");

// converting day & month values to Mon-Sub & Jan-Dec
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// API key value

const API_KEY = "";

// updating date & time
setInterval(() => {
  // returns current date and time
  const time = new Date();

  // time values
  const month = time.getMonth(); // 0 - 11
  const date = time.getDate(); // 0-6
  const day = time.getDay(); // 1-31

  const hour = time.getHours(); // 24h clock
  const hour12 = hour >= 13 ? hour % 12 : hour; // 12h clock

  const minutes = time.getMinutes();
  const amPm = hour >= 12 ? "PM" : "AM";

  // set time & date
  timeEl.innerHTML = `${hour12 < 10 ? "0" + hour12 : hour12}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${amPm}`;
  dateEl.innerHTML = `${days[day]}, ${date} ${months[month]}`;
}, 1000);

// API

getWeatherData();

// call API
function getWeatherData() {
  // use navigator to get geolocation
  navigator.geolocation.getCurrentPosition((success) => {
    console.log(success);

    // destructuring of coords object into lat & long
    let { latitude, longitude } = success.coords;

    // do API call based on geolocation
    // to get celsius, pass in "units=metric"
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // use fetched data
        showWeatherData(data);
      });
  });
}

// humidity, wind, pressure from "current" object
function showWeatherData(data) {
  const { humidity, pressure, sunrise, sunset, wind_speed } = data.current;

  // timezone and coordinates
  timeZoneEl.innerHTML = data.timezone;
  countryEl.innerHTML = data.lat + "N " + data.lon + "E";

  // render API data

  currentWeatherItemsEl.innerHTML = `<div class="weather-item">
    <p>Humidity</p>
    <p>${humidity}%</p>
  </div>
  <div class="weather-item">
    <p>Wind Speed</p>
    <p>${wind_speed} m/s</p>
  </div>
  <div class="weather-item">
    <p>Pressure</p>
    <p>${pressure} hPa</p>
  </div>
  <div class="weather-item">
    <p>Sunrise</p>
    <p>${window.moment(sunrise * 1000).format("HH:mm a")}</p>
  </div>
  <div class="weather-item">
    <p>Sunset</p>
    <p>${window.moment(sunset * 1000).format("HH:mm a")}</p>
  </div>
  `;

  // "daily" object contains 8 arrays with data for today at position 0, and data for the rest of the week at position 1-7

  let restOfTheWeekForecast = "";

  data.daily.forEach((day, index) => {
    // today
    if (index == 0) {
      currentTempEl.innerHTML = `
      <img
          src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png"
          alt="Weather icon"
          class="w-icon"
        />
        <div class="current-day">
          <p class="day">Monday</p>
          <p class="temp">Night: ${day.temp.night}&#176; C</p>
          <p class="temp">Day: ${day.temp.day}&#176; C</p>
        </div>
      `;
    }

    // rest of the week
    else {
      restOfTheWeekForecast += `
      <div class="weather-forecast-item">
      <p class="day">${window.moment(day.dt * 1000).format("ddd")}</p>
      <img
        src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
        alt="weather icon"
        class="w-icon"
      />
      <p class="temp">Night: ${day.temp.night}&#176; C</p>
      <p class="temp">Day: ${day.temp.day}&#176; C</p>
    </div>
      `;
    }
  });

  // add to the DOM
  futureForecastEl.innerHTML = restOfTheWeekForecast;
}
