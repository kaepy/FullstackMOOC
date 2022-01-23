// 2.1: kurssitiedot step6
// Viimeistellään nyt tehtävien 1.1-1.5 kurssin sisältöjä renderöivän ohjelman koodi.
// Määritellään Course komponentti jonka vastuulla on kurssin ja osien renderöinti
// Poistetaan tehtävien yhteenlaskettu lukumäärä
// Refaktoroidaan niin että sovellus toimii riippumatta kurssissa olevien osien määrästä (Map)

import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <ul>
      {props.course.parts.map(part =>
        <Part key={part.id} part={part.name} exercises={part.exercises}/>
      )}
      </ul>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
      <li>{props.part} {props.exercises}</li>
  )
}

/* Tässä vaiheessa siis tehtävien yhteenlaskettua lukumäärää ei vielä tarvita.
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[0].exercises + props.course.parts[0].exercises}</p>
    </div>
  )
}
*/

export default App