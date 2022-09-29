import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])

  console.log(countries)

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  // ternaryitä ei yleensä normaalioloissa suvaita monirivittää
  // vaihtoehtonen tässä vois olla ottaa mallia siitä "palastelusta ja verboosimmaks tekemisestä"
  // Yleensä on myös tapana kirjottaa if-elset (ja myös ternary koska sehän on if-else) niinpäin että ehdossa ei oo negaatiota ("jos jotain niin tätä tai muuten tota" vs "jos ei jotain niin tota tai muuten tätä"), ja yleensä myös suositeltavaa olla täsmällisempi eli tässä tapauksessa filtteröidään vaan jos filtter on jotain muuta ku tyhjä string
  /*
  const countriesToShow = !filter //ehto
    ? [] //true, oletuksena ei listata mitään
    : countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())) //false, listataan filteröidyt
    */

  const countryFilter = country => country.name.common.toLowerCase().includes(filter.toLowerCase());
  const countriesToShow = filter !== '' ? countries.filter(countryFilter) : [];

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <Countries countriesToShow={countriesToShow} setFilter={setFilter} />

    </div>
  )

}
export default App
