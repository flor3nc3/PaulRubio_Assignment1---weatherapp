// Function to display weather data on the UI
export function displayWeather(data) {
  const weatherContainer = document.querySelector('#weatherDisplay');
  weatherContainer.innerHTML = `
    <h3>Weather in ${data.name}</h3>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Condition: ${data.weather[0].description}</p>
  `;
}

// Function to display error messages
export function showError(message) {
  const weatherContainer = document.querySelector('#weatherDisplay');
  weatherContainer.innerHTML = `<p class="error">${message}</p>`;
}

// Function to display favorite cities
export function displayFavorites(favoriteCities) {
  const weatherContainer = document.querySelector('#weatherDisplay');
  if (favoriteCities.length > 0) {
    weatherContainer.innerHTML = '<h3>Favorite Cities:</h3>';
    favoriteCities.forEach(city => {
      weatherContainer.innerHTML += `<p>${city}</p>`; // Display each favorite city
    });
  } else {
    weatherContainer.innerHTML = '<p>No favorite cities added yet.</p>';
  }
}
