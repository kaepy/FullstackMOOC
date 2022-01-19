// 1.8: unicafe step3
// Refaktoroi sovelluksesi siten, että tilastojen näyttäminen on eriytetty oman komponentin Statistics vastuulle. Sovelluksen tila säilyy edelleen juurikomponentissa App.

import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [arr, setArry] = useState([])

  //setAll(all.length)
  //const avg = (sum / all.length) || 0;

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

// Uusiokäytettävä nappi
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

  // JS ei tykkää 0:lla jakamisesta, joten lähtötilanne NaN
  if (arrSum > 0){ 
    arrAvg = props.arr.reduce((a,b) => a + b, 0) / arrSum
    positive = props.good * 100 / arrSum
  }

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

export default App
