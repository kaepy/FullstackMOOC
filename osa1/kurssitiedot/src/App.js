import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
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
      <Part part={props.course.parts[0].name} />
      <Part part={props.course.parts[1].name} />
      <Part part={props.course.parts[2].name} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[0].exercises + props.course.parts[0].exercises}</p>
    </div>
  )
}


export default App