// 2.6: puhelinluettelo step 1
// Toteutetaan henkilön lisäys puhelinluetteloon

import React, { useState } from 'react'

const App = () => {
  
  const [persons, setPersons] = useState([ { name: 'Arto Hellas' } ]) // puhelinluettelon persoonat
  const [newName, setNewName] = useState('') // lomakkeen syöte
  

  // uuden henkilön lisääminen
  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const personObject = {
      name: newName,
    }

    setPersons(persons.concat(personObject)) // Uusi persoona lisätään vanhojen joukkoon
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const Person = ({ person }) => {
    return (
      <li>{person.name}</li>
    )
  }

  //console.log('App toimii...')

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div> {persons.map(person => <Person key={person.name} person={person} />)}</div>
      <div>debug: {newName}</div>
    </div>
  )

}

export default App