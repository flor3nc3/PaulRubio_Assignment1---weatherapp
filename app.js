import { fetchWeather } from './fetchWeather.js';
import { displayWeather, showError, displayFavorites } from './ui.js';

let favCities = []; //  variable name

// Get weather for the input city
function getWeather() {
  const city = document.querySelector('#cityInput').value.trim();
  if (!city) {
    showError("Enter a valid city.");
    return;
  }

  fetchWeather(city)
    .then((data) => {
      displayWeather(data);
      addToFavorites(city); 
    })
    .catch(() => {
      showError("Couldn't find the city, try again.");
    });
}

// Add city to favorites if not already there
function addToFavorites(city) {
  if (favCities.indexOf(city) === -1) {
    favCities.push(city);
    console.log(`${city} added to favorites`);
  }
}

// Display favorite cities
function showFavorites() {
  if (favCities.length) {
    displayFavorites(favCities);
  } else {
    console.log("No favorites yet.");
  }
}

// Event listeners
document.querySelector('#getWeatherBtn').addEventListener('click', getWeather);
document.querySelector('#showFavoritesBtn').addEventListener('click', showFavorites);
