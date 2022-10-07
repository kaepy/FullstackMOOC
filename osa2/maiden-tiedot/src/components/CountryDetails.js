import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import React from 'react'

// muuttujassa api_key on nyt käynnistyksessä annettu API-avaimen arvo
// globaali muuttuja, mutta ei kuitenkaan tällä tapaa periydy App.js:stä komponentille
const api_key = process.env.REACT_APP_API_KEY

const CountryDetails = ({ country }) => {
  console.log('Debug: CountryDetails ### start')

  const countryCapital = country.capital
  const languages = Object.values(country.languages)

  console.log('Debug: CountryDetails ### end')

  return (
    <div>
      {console.log('Debug: CountryDetails return start')}
      <h1>{country.name.common}</h1>

      <div>Capital: {country.capital}</div>
      <div>Area: {country.area}</div>

      <h2>Languages:</h2>
      <ul>
        {languages.map(language =>
          <li key={language}>{language}</li>
        )}
      </ul>

      <img src={country.flags.png} alt={"The flag of the " + country.name.common} ></img>

      <WeatherDetails key={countryCapital} countryCapital={countryCapital} />

      {console.log('Debug: CountryDetails return end')}
    </div>
  )
}

const WeatherDetails = ({ countryCapital }) => {
  console.log('Debug: WeatherDetails ### start')

  const [weather, setWeather] = useState([])

  // huomaa latauksen hallinnassa ` hipsut kun template string, voi tehä toki ilmankin jos haluu ennemmin niillä plussilla
  // ternaryssä katotaan onko weather.main siellä, ja jos on nii sit näytetään toi lämpötilan arvo siellä, tota main ei ole tuolla weatherissa ennenku se sää on haettu
  const temperatureText = weather.main ? `Temperature ${weather.main.temp} Celcius` : "Loading temperature..."
  const windText = weather.wind ? `Wind ${weather.wind.speed} m/s` : "Loading wind speed..."
  const weatherIconDesc = weather.weather ? `${weather.weather.map(description => description.description)} icon` : "Loading weather icon text..."
  const weatherIconURL = weather.weather ? "http://openweathermap.org/img/wn/" + weather.weather.map(icon => icon.icon) + "@2x.png" : ""

  const hook2 = () => {
    console.log('Debug: effect 2 - get weather data')
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=' + countryCapital + '&units=metric&appid=' + api_key)
      .then(response => {
        setWeather(response.data)
        console.log('Debug: setWeather done')
      })
  }
  useEffect(hook2, [countryCapital])

  console.log('Debug: effect 2 ohitettu')

  if (hook2.isSuccess) return null

  return (
    <div>
      <h2>Weather in {countryCapital}</h2>
      <div>{temperatureText}</div>
      <img src={weatherIconURL} alt={weatherIconDesc}></img>
      <div>{windText}</div>

      {console.log('Debug: WeatherDetails return end')}
    </div>
  )
}

export default CountryDetails