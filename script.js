  function getWeather() {
  const locationInput = document.getElementById('locationInput').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=fba0a6813882eb079d6f518ef963d53f&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Precipitation: ${data.rain ? data.rain['1h'] || data.rain['3h'] : '0'} mm</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        <p>Wind Direction: ${data.wind.deg}°</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    });
  }
