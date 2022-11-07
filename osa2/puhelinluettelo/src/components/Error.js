import React from 'react'

const Error = ({ error }) => {
  
  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontWeight: 'bold',
    fontSize: 16,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

if (error === null) {
  return null
}

return (
  <div style={errorStyle}>
    {error}
  </div>
)

}

export default Error