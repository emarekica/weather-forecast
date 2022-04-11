"use strict";

const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

// function that fetches weather via API
const fetchWeather = async (searchtext) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchtext}&units=imperial&appid=${process.env.WEATHER_API_KEY}`;

  try {
    const weatherStream = await fetch(url);
    const weatherJson = await weatherStream.json();

    return weatherJson;
  } catch (error) {
    return { Error: error.stack };
  }
};

// another default route to test
router.get("/", (req, res) => {
  res.json({ success: "Hello Weather!" });
});

// create GET and POST weather routes

// export route so you know you're using it
module.exports = router;
