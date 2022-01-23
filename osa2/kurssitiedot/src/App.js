// 2.5: kurssitiedot step 10 - erillinen moduuli
// Määrittele komponentti Course omana moduulinaan, jonka komponentti App importtaa. Voit sisällyttää kaikki kurssin alikomponentit samaan moduuliin.

import React from 'react'
import Course from './components/Course'

const App = (props) => {
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

export default App