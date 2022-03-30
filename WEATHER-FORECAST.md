# WEATHER FORECAST

<br>

Working notes

<br><br>

## Content

1. [HTML](#1-html)
2. [CSS](#2-css)
3. [JS](#3-js)
4. [Improvements](#4-improbements)

<br><br>

---

<br>

## 1. HTML

<br>

### Block elements

<br>

<p> and <div>

- [block level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)

- [inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
  <br><br>

---

<br>

## 2. CSS

<br>

- [px >> em converter](https://nekocalc.com/px-to-em-converter)

- [weather icons](http://openweathermap.org/img/wn/10d@2x.png)
  <br><br>

<br><br>

**enabling scrolling on y-axis**
<br>

    overflow-y: scroll

<br><br>

---

<br>

## 3. JS

<br>

Date & time update without API
<br>

1. with `setInterval()` and we don't set the interval, but it keeps being called infinitelly

- this function is called every 1 sec

<br><br>

`Date()``
<br>

Creates a JavaScript `Date` instance that represents a single moment in time in a platform-independent format.`Date` objects contain a `Number` that represents milliseconds since 1 January 1970 UTC.
<br>

The only correct way to instantiate a new Date object is by using the `new` operator.
<br><br>

When no parameters are provided, the newly-created Date object represents the current date and time as of the time of instantiation.

```
new Date(); // returns current date & time

```

<br><br>

### How to create new date

<br>

```js
let today = new Date();
let sameDay = new Date(today);
let birthday = new Date("December 17, 1995 13:24:00");
let birthday = new Date("1995-12-17T13:24:00");
let birthday = new Date(1995, 11, 17); // the month is 0-indexed
let birthday = new Date(1995, 11, 17, 13, 24, 0);
```

<br><br>

`getMonth()`
<br>

The `getMonth()` method returns the month in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).
<br>

**Return value**
<br>

An integer number, between 0 and 11, representing the month in the given date according to local time. 0 corresponds to January, 1 to February, and so on.
<br>

```js
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getMonth()); // (January gives 0)
// expected output: 6
```

<br><br>

`getDate()`
<br>

The `getDate()` method returns the day of the month for the specified date according to local time.
<br>

**Return value**
<br>

An integer number, between 1 and 31, representing the day of the month for the given date according to local time.
<br>

```js
const birthday = new Date("August 19, 1975 23:15:30");
const date1 = birthday.getDate();

console.log(date1);
// expected output: 19

var Xmas95 = new Date("December 25, 1995 23:15:30");
var day = Xmas95.getDate();

console.log(day); // 25
```

<br><br>

- [Date constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)

- [Date.prototype.getMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)

- [Date.prototype.getDate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)
  <br><br>

---

<br>

## 4. Improvements

<br>

- [] Add search (use another API)

<br><br>

---

<br>

## API's

<br>

- [Openweather API](https://openweathermap.org/api)

<br>

## Resources

<br>

- [Codepen Examples](https://codepen.io/collection/OLWRva)

- [Codepen Favourite](https://codepen.io/ChynoDeluxe/pen/dXdVqM)

<br>

- [YT vanilla JS weather API](https://www.youtube.com/watch?v=s_Ie_yh_4Co&list=PLmGRn_VnTuAxIHKjfgoOEOIk72PeZdbaB&index=77)
  <br><br>

- [Build a Weather App with HTML, CSS & JavaScript](https://www.youtube.com/watch?v=WZNG8UomjSI&list=PLmGRn_VnTuAxIHKjfgoOEOIk72PeZdbaB&index=89)
  <br><br>

- [Weather App using Openweathermap API ](https://www.youtube.com/watch?v=6trGQWzg2AI&list=PLmGRn_VnTuAxIHKjfgoOEOIk72PeZdbaB&index=91)
- [GitHub source code](https://github.com/asishgeorge/weather-website)
