// 2.6: puhelinluettelo step 1
// Toteutetaan henkilön lisäys puhelinluetteloon

import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = (props) => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('') // lomakkeen syöte
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  //const [showAll, setShowAll] = useState(true)
  //console.log('persons', persons)
  //console.log('newName', newName)
  //console.log('newNumber', newNumber)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
    }, [])

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

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const personsToShow = !filter //ehto
    ? persons // true
    // startsWith tai includes käy riippuen tarpeesta
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) // false, luo uuden arrayn

  console.log('App toimii...')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />

       {/*<div>debug: {newName} {newNumber}</div>*/}
       {/*<div>debug: {newFilter}</div>*/}
    </div>
  )

}

export default App