export async function fetchWeather(city) {
  const apiKey = 'ec4c6f077d60cdd5488c0cd70cbb863a';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`Couldn't find ${city}`);
    }
    return await res.json();
  } catch (err) {
    console.log('Fetch failed:', err.message);
    throw err; 
  }
}
