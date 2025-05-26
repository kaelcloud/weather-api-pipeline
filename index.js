require('dotenv').config();
const express = require('express');
const app = express();

const API_KEY = process.env.OPENWEATHER_API_KEY; // Ganti dengan API key sebenar dari OpenWeatherMap

app.get('/', (req, res) => {
  res.send('Welcome to Weather API!');
});

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: 'Please provide a city name' });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    console.log('Fetching URL:', url); // log URL untuk pastikan betul

    const response = await fetch(url);

    const text = await response.text(); // response dalam bentuk text (log dulu sebelum parse)
    console.log('Response from OpenWeatherMap:', text);

    if (!response.ok) {
      return res.status(response.status).json({ error: 'City not found or API error' });
    }

    const data = JSON.parse(text);

    const weatherData = {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed
    };

    res.json(weatherData);

  } catch (error) {
    console.error('Catch Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('API listening on port 3000');
});
