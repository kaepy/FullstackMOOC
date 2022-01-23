// 2.1: kurssitiedot step 6
// Poistettiin lista rakenne partsien renderöinniltä

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
  //console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  //let totalExercises = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      {props.course.parts.map(part =>
        <Part part={part.name} exercises={part.exercises}/>
      )}
      {/*<Total totalExercises={totalExercises} />*/}
    </div>
  )
}

const Part = (props) => {
  //console.log(props)
  return (
      <p>{props.part} {props.exercises}</p>
  )
}

/*
const Total = (props) => {
  //console.log(props)


  return (
    <div>
      <p><b>total of {props.totalExercises} exercises</b></p>
    </div>
  )
}
*/

export default App