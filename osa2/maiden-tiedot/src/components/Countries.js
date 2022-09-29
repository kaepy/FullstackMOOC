import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const Countries = ({ countriesToShow, setFilter}) => {

  if (countriesToShow.length > 10){
    return (
        <div>Too many matches, specify another filter</div>
    )
  }

  if (countriesToShow.length >= 2){
    return (
        <div>
          {countriesToShow.map(country => console.log('Map', country) ||
            <Country key={country.name.common} country={country} setFilter={setFilter} />
            )}
        </div>
    )
  }

  return (
    <div>
      {countriesToShow.map(country => 
        <CountryDetails key={country.name.common} country={country} />
      )}
    </div>
  )

}

export default Countries