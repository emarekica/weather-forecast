# How to Hide API Keys with Node JS

<br>

---

<br>

To run the local host:
<br>

    npm run dev

<br><br>

**Adding environment variable with dotenv**

<br>

- make `.env` file
- put your API key there
- never include this file in GitHub repo (put it in `.gitignore`)
  <br>

Use [Open Weather Map API](https://openweathermap.org/api)

<br><br>

In the code, the API key should be referenced like this:
<br>

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchtext}&units=imperial&appid=${process.env.WEATHER_API_KEY}`;

<br><br>

Write this in the browser:

    localhost:3000/weather/Zagreb

<br><br>
**Resources**
<br>

[How to Hide API Keys with Node JS](https://www.youtube.com/watch?v=uk9pviyvrtg&t=87s)
