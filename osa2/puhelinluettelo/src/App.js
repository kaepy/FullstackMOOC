// 2.6: puhelinluettelo step 1
// Toteutetaan henkilön lisäys puhelinluetteloon

import React, { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState([ { name: 'Arto Hellas' } ]) // puhelinluettelon persoonat
  const [newName, setNewName] = useState('') // lomakkeen syöte
  console.log('persons', persons)
  console.log('newName', newName)

  // uuden henkilön lisääminen
  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    // obj->obj vertailu ei ole mahdollista, koska ei tiedetä mitä vertailla
    // tästä syystä vertaillaan obj name tietoja keskenään
    if (persons.some(person => person.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
      name: newName
      }

      setPersons(persons.concat(personObject)) // Uusi persoona lisätään vanhojen joukkoon
      setNewName('') /// Tyhjennetään syötekenttää kontrolloiva olio
    }

    //setNewName tyhjennys ei tapahdu tässä jottei typon takia tyhjennetä kenttää

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  console.log('App toimii...')

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
      <div> 
        {persons.map(person => console.log('Map', person) ||
          <Person key={person.name} person={person} />
          )}
      </div>
      /* <div>debug: {newName}</div> */
    </div>
  )

}

export default App