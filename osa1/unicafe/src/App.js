// 1.9: unicafe step 4
// Muuta sovellusta siten, että numeeriset tilastot näytetään ainoastaan, jos palautteita on jo annettu

import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [arr, setArry] = useState([])

  const handleGood = () => {
     setGood(good + 1)
     setArry(arr.concat(1))
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setArry(arr.concat(0))
  }

  const handleBad = () => {
    setBad(bad + 1)
    setArry(arr.concat(-1))
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} arr={arr} />
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  // aina jos arr muuttuu (tilan kautta) niin komponentti renderöidään kokonaan uusiks, siten myös arrAvg lasketaan uudelleen joka kerta, joten pelkkä muuttuja riittää. Ei tarvitse olla apufunktioita.
  const arrSum = props.arr.length
  let arrAvg = 0
  let positive = 0

  if (arrSum > 0){

    arrAvg = props.arr.reduce((a,b) => a + b, 0) / arrSum
    positive = props.good * 100 / arrSum

    return (
      <p>
        good {props.good}<br/>
        neutral {props.neutral}<br/>
        bad {props.bad}<br/>
        all {arrSum}<br/>
        average {arrAvg}<br/>
        positive {positive} %<br/>
      </p>
    )
  } 
  
  return (
    <p>No feedback given</p>
  )
}

export default App
