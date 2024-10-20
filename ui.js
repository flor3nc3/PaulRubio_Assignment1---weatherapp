// weather data 
export function displayWeather(data) {
  const weatherContainer = document.querySelector('#weatherDisplay');
  weatherContainer.innerHTML = `
    <h3>Weather in ${data.name}</h3>
    <p>Temp: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Condition: ${data.weather[0].description}</p>
  `;
}

// error message
export function showError(msg) {
  const weatherContainer = document.querySelector('#weatherDisplay');
  weatherContainer.innerHTML = `<p class="error">${msg}</p>`;
}

// fav cities
export function displayFavourites(favCities) {
  const weatherContainer = document.querySelector('#weatherDisplay');
  if (favCities.length) {
    weatherContainer.innerHTML = '<h3>Your Favorite Cities:</h3>';
    favCities.forEach(city => {
      weatherContainer.innerHTML += `<p>${city}</p>`;
    });
  } else {
    weatherContainer.innerHTML = '<p>No favorites yet.</p>';
  }
}
