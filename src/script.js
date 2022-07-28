let apiKey = "5b0fc91c6e7515d2df886d62bdfd2ab4";

function updateInfo(response) {
  let city = document.querySelector("#current-city");
  let temperature = document.querySelector("#temperature");
  city.innerHTML = `${response.data.name}`;
  temperature.innerHTML = `${response.data.main.temp}`;
}

let searchForm = document.querySelector("#search-form");

function getCityTemperature(event) {
  event.preventDefault();
  let inputText = document.querySelector("#search-input");
  console.log(inputText);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputText.value}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(updateInfo);
}

searchForm.addEventListener("submit", getCityTemperature);

let currentLocationBtn = document.querySelector("#current-location");

function requestLocation(position) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateInfo);
}

function getCurrentCityTemperature(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(requestLocation);
}

currentLocationBtn.addEventListener("click", getCurrentCityTemperature);
