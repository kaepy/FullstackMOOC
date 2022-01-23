// 2.2: kurssitiedot step 7
// Ilmoita myös kurssin yhteenlaskettu tehtävien lukumäärä

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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  //console.log(props)

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

// kurssin muotoilu
const Course = (props) => {
  //console.log(props)
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
    </div>
  )
}

// otsikon näyttäminen
const Header = (props) => {
  //console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

// kurssin sisällön muotoilu ja harjoitusten totaalin laskenta
const Content = (props) => {
  //console.log(props)

  const totalExercises = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      {props.course.parts.map(part =>
        <Part key={part.id} part={part.name} exercises={part.exercises}/>
      )}
      <Total totalExercises={totalExercises} />
    </div>
  )
}

// osien näyttäminen
const Part = (props) => {
  //console.log(props)
  return (
      <p>{props.part} {props.exercises}</p>
  )
}

// totaalin näyttäminen
const Total = (props) => {
  //console.log(props)
  return (
    <div>
      <p><b>total of {props.totalExercises} exercises</b></p>
    </div>
  )
}

export default App