// 1.13*: anekdootit step 2
// Laajenna sovellusta siten, että näytettävää anekdoottia on mahdollista äänestää. 
// Huom: kunkin anekdootin äänet kannattanee tallettaa komponentin tilassa olevan olion kenttiin tai taulukkoon. Muista, että tilan oikeaoppinen päivittäminen edellyttää olion tai taulukon kopioimista.

import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)

  // komponentin tilassa oleva olio
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 })

  // palauttaa random integerin 0 ja 6 väliltä
  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const copy = { ...points } // kopioidaan olio.
    copy[selected] += 1   // kasvatetaan selectedin mukaisen olion kentän arvoa yhdellä
    setPoints(copy)
  }

  return (
    <div>
      {anecdotes[selected]} <br/>
      has {points[selected]} votes <br/>
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleRandom} text='next anecdote' />
    </div>
  )
}

// palautteenanto nappi
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

export default App