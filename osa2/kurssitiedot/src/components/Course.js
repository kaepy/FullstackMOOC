import React from 'react'

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

export default Course