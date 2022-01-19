// 1.7: unicafe step2
// Laajenna sovellusta siten, että se näyttää palautteista enemmän statistiikkaa: yhteenlasketun määrän, keskiarvon (hyvän arvo 1, neutraalin 0, huonon -1) ja sen kuinka monta prosenttia palautteista on ollut positiivisia

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

  // aina jos arr muuttuu (tilan kautta) niin komponentti renderöidään kokonaan uusiks, siten myös arrAvg lasketaan uudelleen joka kerta, joten pelkkä muuttuja riittää. Ei tarvitse olla apufunktioita.
  const arrSum = arr.length
  let arrAvg = 0
  let positive = 0

  // JS ei tykkää 0:lla jakamisesta, joten lähtötilanne NaN
  if (arrSum > 0){ 
    arrAvg = arr.reduce((a,b) => a + b, 0) / arrSum
    positive = good * 100 / arrSum
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h2>statistics</h2>
      <p>
        good {good}<br/>
        neutral {neutral}<br/>
        bad {bad}<br/>
        all {arrSum}<br/>
        average {arrAvg}<br/>
        positive {positive} %<br/>
      </p>
    </div>
  )
}

// Uusiokäytettävä nappi
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

export default App
