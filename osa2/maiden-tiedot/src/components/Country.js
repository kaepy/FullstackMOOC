import React from 'react'

const Country = ({ country, setFilter }) => {
  
  console.log('Debug: Country ###')

  return (
    <div>
      {console.log('Debug: Country return start')}
      {country.name.common}
      <button onClick={() => setFilter(country.name.common)}>show</button>
      {console.log('Debug: Country return end')}
    </div>
  )
}

export default Country