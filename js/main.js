async function getWeather(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

const baseUrl = "https://api.open-meteo.com/v1/forecast?";
const url =
  "https://api.open-meteo.com/v1/forecast?latitude=-26.195246&longitude=28.034088&current_weather=true";
getWeather(url);

console.log(url, baseUrl);

const latitude = 0;
console.log(baseUrl);

const longitude = 0;
console.log(baseUrl);
