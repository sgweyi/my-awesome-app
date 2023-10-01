let apiKey = "1e89f634acc04308a1e3ba81ba032897";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=New York&appid=1e89f634acc04308a1e3ba81ba032897&units=metric";
function showTemperature(response) {
  let temperature=Math.round(response.data.main.temp);
  let description=document.querySelector("#description-Element");
  description.innerHTML=response.data.weather[0].description;
  console.log(response.data.main.temp);
}

axios.get(apiUrl).then(showTemperature);
function showPosition(position){
  let h1=document.querySelector("h1");
  h1.innerHTML=‛Your latitude is${
    position.coords.latitude
  }and your longitude is ${position.coords.longitute}‛;
  console.log(position.coords.latitude);
  console.log(position.coords.longitute);
}
function getCurrentPosition(){
  navigator.geolocation.getCurrentPosition(showPosition); 
}
let button=document.querySelector("button");
button.addEventListener=("click",getCurrentPosition)


function dateFormat(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function searching(event) {
  event.preventDefault();
  let city = document.querySelector("#city");
  let cityVal = document.querySelector("#city-input");
  city.innerHTML = cityVal.value;
}

function fahrenheitConvert(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}



let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = dateFormat(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searching);

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", fahrenheitConvert);

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", celciusConvert);