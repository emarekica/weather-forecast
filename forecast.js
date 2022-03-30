"use strict";

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

const currentWeatherItemsEl = document.getElementById("current-weather-items");

const timeZoneEl = document.getElementById("time-zone");
const countryEl = document.getElementById("country");

const futureForecastEl = document.getElementById("weather-forecas");
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
