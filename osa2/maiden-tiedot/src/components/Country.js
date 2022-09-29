import React from 'react'

const Country = ({ country, setFilter }) => {
  return (
    <div>{country.name.common} 
    <button onClick={() => setFilter(country.name.common)}>show</button></div>
  )
}

export default Country