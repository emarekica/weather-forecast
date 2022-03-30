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

## `Date()`

<br>

Creates a JavaScript `Date` instance that represents a single moment in time in a platform-independent format.`Date` objects contain a `Number` that represents milliseconds since 1 January 1970 UTC.
<br>

The only correct way to instantiate a new Date object is by using the `new` operator.
<br><br>

When no parameters are provided, the newly-created Date object represents the current date and time as of the time of instantiation.

```
new Date(); // returns current date & time

```

<br>

```js
const date1 = new Date("December 17, 1995 03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date("1995-12-17T03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// expected output: false;

console.log(date1 - date2);
// expected output: 0
```

<br><br>

**Return value**
<br>

Calling `new Date()` (the `Date()` constructor) returns a `Date` object. If called with an invalid `date` string, it returns a `Date` object whose `toString()` method returns the literal string Invalid Date.

Calling the `Date()` function (without the `new` keyword) returns a string representation of the current date and time, exactly as `new Date().toString()` does. Any arguments given in a `Date()` function call (without the new keyword) are ignored; regardless of whether it's called with an invalid date string — or even called wth any arbitrary object or other primitive as an argument — it always returns a string representation of the current date and time.
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

## `getMonth()`

<br>

The `getMonth()` method returns **the month** in the specified date according to local time, as a zero-based value (where zero indicates the first month of the year).
<br>

Monday, **July** 20, 2022, 04:20
<br><br>

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

## `getDate()`

<br>

The `getDate()` method returns the **day of the month** for the specified date according to local time.
<br>

Monday, July **20**, 2022, 04:20

<br><br>

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

## `getDay()`

<br>

The `getDay()` method returns the **day of the week** for the specified date according to local time, where **0 represents Sunday**.
<br>

**Monday**, July 20, 2022, 04:20
<br><br>

**Return values**
<br>

An integer number, between 0 and 6, corresponding to the day of the week for the given date, according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.
<br><br>

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var weekday = Xmas95.getDay();

console.log(weekday); // 1
```

<br><br>

## `getHours()`

<br>

The `getHours()` method returns the hour for the specified date, according to local time.
<br>

Monday, July 20, 2022, **04**:20
<br><br>

**Return value**
<br>

An integer number, between 0 and 23, representing the hour for the given date according to local time.
<br><br>

```js
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getHours());
// expected output: 4

let Xmas95 = new Date("December 25, 1995 23:15:30");
let hours = Xmas95.getHours();

console.log(hours); // 23
```

<br><br>

## `getMinutes()`

<br>

The getMinutes() method returns the minutes in the specified date according to local time.
<br>

Monday, July 20, 2022, 04:**20**
<br><br>

```js
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getMinutes());
// expected output: 20

var Xmas95 = new Date("December 25, 1995 23:15:30");
var minutes = Xmas95.getMinutes();

console.log(minutes); // 15
```

<br><br>

**Return value**
<br>

An integer number, between 0 and 59, representing the minutes in the given date according to local time.

<br><br>

- [Date constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)

- [Date.prototype.getMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)

- [Date.prototype.getDate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)

- [Date.prototype.getDay()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)

- [Date.prototype.getHours()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)

- [Date.prototype.getMinutes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)
  <br><br>

---

<br>

## API's

<br>

- [Openweather API](https://openweathermap.org/api)

<br><br>

Search for your generated API KEY when signed in.

<br><br>

## Navigator

<br>

The JavaScript `navigator` object is used for browser detection. It can be used to get browser information such as `appName`, `appCodeName`, `userAgent` etc.

The `navigator` object is the window property, so it can be accessed by: `window. navigator.`
<br><br>

## Geolocation

<br>

The `Geolocation` interface represents an object able to programmatically obtain the position of the device. It gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location.

An object with this interface is obtained using the `navigator.geolocation` property implemented by the `Navigator` object.

This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.
<br><br>

[Geolocation API](https://w3c.github.io/geolocation-api/#geolocation_interface)

<br><br>

- [One Call API](https://openweathermap.org/api/one-call-api)
  <br><br>

- [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)

- [geolocation.getCurrentPosition()]()
  <br><br>

## fetch()

<br>

The global `fetch()` **method** starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

The promise resolves to the `Response` object representing the response to your request.

A `fetch()` promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A `fetch()` promise does not reject on HTTP errors (404, etc.). Instead, a `then()` handler must check the `Response.ok` and/or `Response.status` properties.

`fetch()` method is available in pretty much any context in which you might want to fetch resources.
<br><br>

The `fetch()` method's parameters are identical to those of the `Request()` constructor.
<br><br>

**Syntax**

    const fetchResponsePromise = fetch(resource [, init])

<br><br>

**Parameters**
<br>

1. **resource**

- a string or any other object with a stringifier — including a URL object — that provides the URL of the resource you want to fetch.
- A `Request` object

2. optional: an object containing any custom settings that you want to apply to the request

<br><br>

**Return value**
<br>

A `Promise` that resolves to a `Response` object.

<br><br>

**Basic fetch request**
<br>

```js
fetch("http://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

<br><br>

Here we are fetching a JSON file across the network and printing it to the console. The simplest use of `fetch()` takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a `Response` object.

The `Response` object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the `Response` object, we use the `json()` method, which returns a second promise that resolves with the result of parsing the response body text as JSON.

<br><br>

[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

<br><br>

## HOISTING - Invoking (calling) a function before it has been defined

<br>

**Expression Functions**
<br>
Function expressions can be stored in a variable so they do not need function names. They will also be named as an anonymous function (a function without a name).
<br>

To invoke (call) these functions they always need a variable name. **This kind of function won't work if it is called before it has been defined which means Hoisting is not happening here.** We must always define the expression function first and then invoke it.
<br><br>

```js
let lastName = function (family) {
  console.log("My last name is " + family);
};
let x = lastName("Lopez");
```

<br><br>

This is how you can write it in ECMAScript 6:
<br>

```js
lastName = (family) => console.log("My last name is " + family);
x = lastName("Lopez");
```

<br><br>

**Declaration Functions**
<br>

Functions declared with the following syntax are not executed immediately. **They are "saved for later use" and will be executed later, when they are invoked (called upon). This type of function works if you call it BEFORE or AFTER where is has been defined.** If you call a declaration function before it has been defined Hoisting works properly.
<br><br>

```js
function Name(name) {
  console.log("My cat's name is " + name);
}
Name("Chloe");
```

<br><br>

Hoisting example:
<br>

```js
Name("Chloe");
function Name(name) {
  console.log("My cat's name is " + name);
}
```

<br><br>

---

<br>

## 4. Improvements

<br>

- [] Add search (use another API)

<br><br>

---

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
