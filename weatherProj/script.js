document.addEventListener("DOMContentLoaded", () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cbdcf41c1fmshbcb572af279c535p1df6a6jsn51ad592c8d74",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  const cityName = document.querySelector("#cityName");
  const cloud_pct = document.querySelector("#cloud_pct");
  const temp = document.querySelector("#temp");
  const feels_like = document.querySelector("#feels_like");
  const humidity = document.querySelector("#humidity");
  const min_temp = document.querySelector("#min_temp");
  const max_temp = document.querySelector("#max_temp");
  const wind_speed = document.querySelector("#wind_speed");
  const wind_degrees = document.querySelector("#wind_degrees");
  const sunrise = document.querySelector("#sunrise");
  const sunset = document.querySelector("#sunset");
  const city = document.querySelector("#city");
  const submit = document.querySelector("#submit");

  const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        cloud_pct.innerHTML = response.cloud_pct;
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
      })
      .catch((err) => console.error(err));
  };

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
  });

  getWeather("Mumbai");

  // Find the row that contains the city name "Mumbai"
  const tableRows = document.querySelectorAll("tr");
  let row = null;
  tableRows.forEach((tableRow) => {
    const cityNameColumn = tableRow.querySelector("th");
    if (cityNameColumn && cityNameColumn.innerHTML === "Mumbai") {
      row = tableRow;
    }
  });

  // Define an array of city names to fetch weather data for
  const cities = [
    "Tokyo",
    "New York City",
    "Paris",
    "London",
    "Sydney",
    "Mumbai",
  ];

  // Loop through the cities and fetch their weather data
  cities.forEach((city) => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?location=${city}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        // Update the table cells with the weather data for this city
        document.getElementById(`${city.toLowerCase()}_cloud_pct`).textContent =
          data.cloud_pct;
        document.getElementById(
          `${city.toLowerCase()}_feels_like`
        ).textContent = data.feels_like;
        document.getElementById(`${city.toLowerCase()}_humidity`).textContent =
          data.humidity;
        document.getElementById(`${city.toLowerCase()}_max_temp`).textContent =
          data.max_temp;
        document.getElementById(`${city.toLowerCase()}_min_temp`).textContent =
          data.min_temp;
        document.getElementById(`${city.toLowerCase()}_sunrise`).textContent =
          data.sunrise;
        document.getElementById(`${city.toLowerCase()}_sunset`).textContent =
          data.sunset;
        document.getElementById(`${city.toLowerCase()}_temp`).textContent =
          data.temp;
        document.getElementById(
          `${city.toLowerCase()}_wind_degrees`
        ).textContent = data.wind_degrees;
        document.getElementById(
          `${city.toLowerCase()}_wind_speed`
        ).textContent = data.wind_speed;
      })
      .catch((error) => {
        console.error(`Error fetching weather data for ${city}: ${error}`);
      });
  });
});
