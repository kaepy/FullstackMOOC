import React from 'react'

// 1.1 Luodaan sovellus, siivotaan se ja jaetaan komponentteihin Header, Content ja Total
// 1.2 Refaktoroidaan Content niin ettei se renderöi itse mitään vaan kolme Part komponenttia
// 1.3 Siirrytään käyttämään oliota
// 1.4 Laittaan oliot taulukkoon 
// 1.5 tehdään vain yksi JS-olio kurssista ja sen osista
// 1.6 

const App = () => {
  // Reactin yhteydessä sovelletaan usein funktionaalisen ohjelmoinnin tekniikoita (muuttumattomat tietorakenteet, concat)
  // Const määrittelee vakion jota ei voi enää muuttaa. Let määrittelee normaalin muuttujan.
  // Course olioteraali joka sisältää kentät name ja parts
  // Parts taulukko joka sisältää olioita
  // Taulukon sisältöä voi muttaa, vaikka se onkin const, koska se on olio
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

// Olioiden kenttiin viitataan pistenotaatiolla "course.name" tai hakasulkein "course[name]"
// Kentän lisääminen oliolle lennosta "course.luokkatila = 'B123'" tai "course['kurssin luokka'] = 'B123'"
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
  // propsien tulostus konsoliin
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