import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  // const [newCountry, setNewCountry] = useState([])
  // const [showMaxTenCountries, setShowMaxTenCountries] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  } 
  useEffect (hook, [])

  console.log(countries)

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }


  const countriesToShow = !filter //ehto
    ? [] //true, oletuksena ei listata mitään
    : countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())) //false, listataan filteröidyt

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <Countries countriesToShow={countriesToShow} />

    </div>
  )

}
export default App
