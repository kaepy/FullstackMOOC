// 2.4: kurssitiedot step 9
// Laajennetaan sovellusta siten, että kursseja voi olla mielivaltainen määrä

import React from 'react'

const App = () => {
  const courses = [
    {
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  console.log('App toimii...')

  return (
    <div>
      {courses.map(course => console.log('Map', course) ||
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

// kurssin muotoilu
const Course = (props) => {
  console.log('Course', props)

  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
    </div>
  )
}

// otsikon näyttäminen
const Header = (props) => {
  console.log('Header', props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

// kurssin sisällön muotoilu ja harjoitusten totaalin laskenta
const Content = (props) => {
  console.log('Content', props)

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
  //console.log('Part', props)
  return (
      <p>{props.part} {props.exercises}</p>
  )
}

// totaalin näyttäminen
const Total = (props) => {
  //console.log('Total', props)
  return (
    <div>
      <p><b>total of {props.totalExercises} exercises</b></p>
    </div>
  )
}

export default App