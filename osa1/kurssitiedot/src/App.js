import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.part}
      </p>
    </>
  )
}

//Part komponentin part attribuutin arvoksi asetetaan propsista saatava part1 arvo
//Metodille parametrin arvoksi asetetaan props.part1 arvo
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0].name} />
      <Part part={props.parts[1].name} />
      <Part part={props.parts[2].name} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[0].exercises + props.parts[0].exercises}</p>
    </div>
  )
}


export default App