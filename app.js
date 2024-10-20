import { fetchWeather } from './fetchWeather.js';
import { displayWeather, showError, displayFavourites } from './ui.js';

let favCities = []; //  variable name

// Get weather for the suggest city
function getWeather() {
  const city = document.querySelector('#cityInput').value.trim();
  if (!city) {
    showError("Enter a valid city.");
    return;
  }

  fetchWeather(city)
    .then((data) => {
      displayWeather(data);
      addToFavourites(city); 
    })
    .catch(() => {
      showError("Cant't find city, try again.");
    });
}

// Add city to favourites if not already there
function addToFavourites(city) {
  if (favCities.indexOf(city) === -1) {
    favCities.push(city);
    console.log(`${city} added to favourites`);
  }
}

// favourite cities
function showFavourites() {
  if (favCities.length) {
    displayFavourites(favCities);
  } else {
    console.log("No favourites yet.");
  }
}

// Event listeners
document.querySelector('#getWeatherBtn').addEventListener('click', getWeather);
document.querySelector('#showFavouritesBtn').addEventListener('click', showFavourites);
