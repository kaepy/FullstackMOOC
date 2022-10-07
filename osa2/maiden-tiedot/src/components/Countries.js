import React from 'react'
import Country from './Country'
import CountryDetails from './CountryDetails'

const Countries = ({ countriesToShow, setFilter}) => {
  
  console.log("Debug: Countries ### start")

  if (countriesToShow.length > 10){
    console.log("Debug: Yli 10 osumaa ###")
    return (
        <div>{console.log("Debug: Yli 10 osumaa return")}Too many matches, specify another filter</div>
    )
  }

  if (countriesToShow.length >= 2){
    console.log("Debug: 2-10 osumaa ###")
    return (
        <div>
          {console.log("Debug: 2-10 osumaa return")}
          {countriesToShow.map(country => console.log('Map', country) ||
            <Country key={country.name.common} country={country} setFilter={setFilter} />
            )}
        </div>
    )
  }

  if (countriesToShow.length === 1){
    console.log('Debug: Yksi osuma ###')
    return (
      <div>
        {console.log('Debug: Yksi osuma return')}
        {countriesToShow.map(country => 
          <CountryDetails key={country.name.common} country={country} />
        )}
      </div>
    )
  }

  console.log("Debug: Countries ### end")

  return (<div>{console.log("Debug: Countries return")}</div>)

}

export default Countries