// 2.6: puhelinluettelo step 1
// Toteutetaan henkilön lisäys puhelinluetteloon

import React, { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState([ 
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) // puhelinluettelon persoonat

  const [newName, setNewName] = useState('') // lomakkeen syöte
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  //const [showAll, setShowAll] = useState(true)
  //console.log('persons', persons)
  //console.log('newName', newName)
  //console.log('newNumber', newNumber)

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
      name: newName,
      number: newNumber
      }

      setPersons(persons.concat(personObject)) // Uusi persoona lisätään vanhojen joukkoon
      setNewName('') /// Tyhjennetään syötekenttää kontrolloiva olio
      setNewNumber('') /// Tyhjennetään syötekenttää kontrolloiva olio
    }

    //setNewName tyhjennys ei tapahdu tässä jottei typon takia tyhjennetä kenttää

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const personsToShow = !newFilter //ehto
    ? persons // true
    // luodaan uusi array jossa on kaikki 
    : persons.filter(person => person.name.toLowerCase().startsWith(newFilter.toLowerCase())) // false, luo uuden arrayn

  console.log('App toimii...')

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with <input value={newFilter} onChange={handleNewFilter} />
      </div>
      
        {/*</div>() => setShowAll(!showAll) //muuta showAll falseksi
          show {showAll ? 'important' : 'all' }*/}


      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div> 
        //nyt ei haluta käydä kaikkia läpi vaan ainoastaan showAll tai filteröity uusi array
        {personsToShow.map(person => console.log('Map', person) ||
          <Person key={person.name} person={person} />
          )}
      </div>
       {/*<div>debug: {newName} {newNumber}</div>*/}
       <div>debug: {newFilter}</div>
    </div>
  )

}

export default App