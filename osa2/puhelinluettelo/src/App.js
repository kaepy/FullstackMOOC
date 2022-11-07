// 2.20*: puhelinluettelo step 12
// Virhetilanteen hallinta jossa jo kannasta poistettua resurssia yritetään päivittää toisella selaimella

import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('') // lomakkeen syöte
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
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
    if (persons.some(person => person.name === newName)) {

      console.log('newName ' + newName)
      console.log('newNumber ' + newNumber)

      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name === newName)
        console.log('person ' + person.name)
        console.log('person ' + person.number)
        console.log('person ' + person.id)

        const id = person.id

        const changePerson = { ...person, number: newNumber }
        console.log('change ' + changePerson.name)
        console.log('change ' + changePerson.number)
        console.log('change ' + changePerson.name)

        personService.update(id, changePerson).then(() => {
          personService.getAll().then(allPersonsResponse => {
            setPersons(allPersonsResponse.data)
            handleNotificationChange(`Number changed for ${person.name}`)
            setNewName('') /// Tyhjennetään syötekenttää kontrolloiva olio
            setNewNumber('') /// Tyhjennetään syötekenttää kontrolloiva olio
          })
        }).catch(error => {
          handleErrorChange(`Information of ${person.name} has already been removed from server`)
        }).then(() => {
          personService.getAll().then(allPersonsResponse => {
            setPersons(allPersonsResponse.data)
            handleNotificationChange(`Number directory updated`)
            setNewName('') /// Tyhjennetään syötekenttää kontrolloiva olio
            setNewNumber('') /// Tyhjennetään syötekenttää kontrolloiva olio
          })
        })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(response => {
          // Asetetaan response-oliosta kentän data arvona oleva uusi persoona muiden joukkoon luomalla uuden taulukon
          // Palvelin lisää persoonalle id-tunnisteen automaattisesti joten sitä ei tarvita erikseen määritellä
          setPersons(persons.concat(response.data))
          handleNotificationChange(`Added ${newName}`)
          setNewName('') /// Tyhjennetään syötekenttää kontrolloiva olio
          setNewNumber('') /// Tyhjennetään syötekenttää kontrolloiva olio
        })
    }

    //setNewName tyhjennys ei tapahdu tässä jottei typon takia tyhjennetä kenttää

  }

  const removePersonOf = id => {
    const person = persons.find(n => n.id === id)

    if (window.confirm(`Delete ${person.name} ?`)) {
      // tyhjän () tilalla vois olla vaikka removeResponse joka tosin ei kiinnosta meitä, mutta siinä voisi periaatteessa olla joku poisto-operaation kuittaus tms vastaus jos tää olis hieno softa
      // Oletuksella tietysti että se backend vastaa poistoon vasta kun se on poistettu, mitä se kyllä tekee jos sitä ei oo erikseen koodannu asynkronista poistoa
      personService.remove(id).then(() => {
        personService.getAll().then(allPersonsResponse => {
          setPersons(allPersonsResponse.data)
          handleNotificationChange(`Removed ${person.name}`)
        }
        )
      })
    }
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

  const handleNotificationChange = (notification) => {
    setMessage(notification)
    setTimeout(() => { setMessage(null) }, 5000)
  }

  const handleErrorChange = (error) => {
    setError(error)
    setTimeout(() => { setError(null) }, 5000)
  }

  const personsToShow = !filter //ehto
    ? persons // true
    // startsWith tai includes käy riippuen tarpeesta
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) // false, luo uuden arrayn

  console.log('App toimii...')

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Error error={error} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} removePerson={removePersonOf} />

    </div>
  )

}

export default App