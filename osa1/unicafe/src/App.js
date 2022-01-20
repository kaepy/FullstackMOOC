// 1.10: unicafe step 5
// Eriytä seuraavat kaksi komponenttia:
// - Button vastaa yksittäistä palautteenantonappia
// - StatisticLine huolehtii tilastorivien, esim. keskiarvon näyttämisestä
// Komponentti StatisticLine näyttää aina yhden tilastorivin, joten sovellus käyttää montaa komponenttia kaikkien tilastorivien renderöintiin

import React, { useState } from 'react'

// sovelluksen tila pysyy kokoajan juurikomponentissa App
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

// palautteenanto nappi
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// tilastorivien näyttäminen
const Statistics = (props) => {
  // aina jos arr muuttuu (tilan kautta) niin komponentti renderöidään kokonaan uusiks, siten myös arrAvg lasketaan uudelleen joka kerta, joten pelkkä muuttuja riittää. Ei tarvitse olla apufunktioita.
  const arrSum = props.arr.length
  let arrAvg = 0
  let positive = 0

  if (arrSum > 0){

    arrAvg = props.arr.reduce((a,b) => a + b, 0) / arrSum
    positive = props.good * 100 / arrSum

    return (
      <div>
        <StatisticLine value={props.good} text="good" />
        <StatisticLine value={props.neutral} text="neutral" />
        <StatisticLine value={props.bad} text="bad" />
        <StatisticLine value={arrSum} text="all" />
        <StatisticLine value={arrAvg} text="average" />
        <StatisticLine value={positive} text="positive" text2="%" />
      </div>
    )
  } 
  
  return (
    <p>No feedback given</p>
  )
}

const StatisticLine = (props) => {
  return(
    <p>{props.text} {props.value} {props.text2}</p>
  )
}

export default App
