import React from 'react'

const CountryDetails = ({ country }) => {
  const languages = Object.values(country.languages);
  
  return (
    <div>
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
    </div>
  )
}

export default CountryDetails