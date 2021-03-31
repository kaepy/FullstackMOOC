import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
    </div>
  )
}

const Header = (props) => {
  //console.log(props)
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
      <Part part={props.part1.name} />
      <Part part={props.part2.name} />
      <Part part={props.part3.name} />
    </div>
  )
}

const Total = (props) => {
  //console.log(props)
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}


export default App