import React from 'react'
import Person from './Person'

const Persons = ({ personsToShow, removePerson }) => {
  return (
    <div> 
        {personsToShow.map(person => console.log('Map', person) ||
          <Person key={person.name} person={person} removePerson={() => removePerson(person.id)} />
          )}
    </div>
  )
}

export default Persons