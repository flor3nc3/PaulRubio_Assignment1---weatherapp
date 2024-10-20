import { fetchWeather } from './fetchWeather.js';
import { displayWeather, showError, displayFavorites } from './ui.js';

// Variables to store user data
const favoriteCities = []; // Array to store favorite cities

// Function to get the weather for the user's input city
function getWeather() {
  const city = document.querySelector('#cityInput').value.trim(); // Trim whitespace
  if (city) {
    fetchWeather(city)
      .then(data => {
        displayWeather(data); // Display weather
        saveToFavorites(city); // Save to favorites
      })
      .catch(error => {
        showError("City not found. Please try again."); // Display error
      });
  } else {
    showError("Please enter a city.");
  }
}

// Function to save searched cities to favorites array
function saveToFavorites(city) {
  if (!favoriteCities.includes(city)) {
    favoriteCities.push(city); // Use push to add a new favorite
    console.log(`${city} added to favorites`);
  }
}

// Function to show favorite cities
function showFavorites() {
  displayFavorites(favoriteCities); // Display the list of favorite cities
}

// Event listener for user input
document.querySelector('#getWeatherBtn').addEventListener('click', getWeather);
document.querySelector('#showFavoritesBtn').addEventListener('click', showFavorites);
