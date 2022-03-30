"use strict";

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

const API_KEY = "0df4efe4d3a7d705c79d4a61ee303468";

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
  timeEl.innerHTML = `${hour12}:${minutes} ${amPm}`;
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

  // add it to the DOM
  futureForecastEl.innerHTML = restOfTheWeekForecast;
}
