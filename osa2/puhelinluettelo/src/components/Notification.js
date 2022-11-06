import React from 'react'

const Notification = ({ message }) => {
  const messageStyle = {
    color: 'green',
    background: 'lightgrey',
    fontWeight: 'bold',
    fontSize: 16,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

if (message === null) {
  return null
}

return (
  <div style={messageStyle} className="error">
    {message}
  </div>
)

}

export default Notification