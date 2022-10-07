import React from 'react'

const Filter = ({ filter, handleFilterChange }) => {
  
  console.log('Debug: Filter ###')

  return (
    <div>
      {console.log('Debug: Filter return start')}
      Find countries <input value={filter} onChange={handleFilterChange} />
      {console.log('Debug: Filter return end')}
    </div>
  )
}

export default Filter