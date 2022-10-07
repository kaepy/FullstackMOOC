import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

/* React Component Lifecycle Harjotus
    Tutorial: https://www.youtube.com/watch?v=-S_WnDl9orU
*/

const App = () => {
  console.log("Debug: App ### start")
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  console.log('Debug: filter ' + filter)

  // nii kauan kun useEffectin [] sisälle ei tule mitään niin API kutsut voi olla samassa hookissa
  const hook = () => {
    // Mikä triggeröi tämän suorituksen?
    console.log('Debug: effect 1 - get country data')

    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
        console.log('Debug: setCountries done')
      })

  }
  useEffect(hook, [])

  console.log('Debug: effect 1 ohitettu')
  console.log(countries)

  const handleFilterChange = (event) => {
    console.log('Debug: filterChange: ' + event.target.value)
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

  // Parempi tapa
  const countryFilter = country => country.name.common.toLowerCase().includes(filter.toLowerCase());
  const countriesToShow = filter !== '' ? countries.filter(countryFilter) : [];

  console.log("Debug: App ### end")

  return (
    <div>
      {console.log('Debug: App return start')}
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <Countries countriesToShow={countriesToShow} setFilter={setFilter} />
      {console.log('Debug: App return end')}
    </div>
  )

}
export default App
