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

  // Display weather data in the table row
  if (row) {
    cloud_pct.innerHTML = row.querySelector("td:nth-child(1)").innerHTML;
    feels_like.innerHTML = row.querySelector("td:nth-child(2)").innerHTML;
    humidity.innerHTML = row.querySelector("td:nth-child(3)").innerHTML;
    max_temp.innerHTML = row.querySelector("td:nth-child(4)").innerHTML;
    min_temp.innerHTML = row.querySelector("td:nth-child(5)").innerHTML;
    sunrise.innerHTML = row.querySelector("td:nth-child(6)").innerHTML;
    sunset.innerHTML = row.querySelector("td:nth-child(7)").innerHTML;
    temp.innerHTML = row.querySelector("td:nth-child(8)").innerHTML;
    wind_degrees.innerHTML = row.querySelector("td:nth-child(9)").innerHTML;
    wind_speed.innerHTML = row.querySelector("td:nth-child(10)").innerHTML;
  }
});
