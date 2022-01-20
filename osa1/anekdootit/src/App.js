// 1.14*: anekdootit step 3
// Näytää eniten ääniä saaneen anekdootin. Jos suurimman äänimäärän saaneita anekdootteja on useita, riittää että niistä näytetään yksi.

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
  const [mostVoted, setMostVoted] = useState(0)

  // komponentin tilassa oleva olio
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 })

  // palauttaa random integerin 0 ja 6 väliltä
  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const newPoints = { ...points } // kopioidaan olio.
    newPoints[selected] += 1   // kasvatetaan selectedin mukaisen olion kentän arvoa yhdellä
    setPoints(newPoints) // Tehdään pyyntö Reactille päivittää pointsin tilaa, eli points ei muutu vielä tällä rivillä vaan "joskus myöhemmin" kun "oma koodi" on suoritettu
    console.log(newPoints)
    console.log(points)
    if (newPoints[selected] > newPoints[mostVoted]){
      setMostVoted(selected)

    }

    console.log('selected', selected)
    console.log('points', points[selected])
    console.log('most voted', mostVoted)
    console.log('voted', points[mostVoted])
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]} <br/>
      has {points[selected]} votes <br/>
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleRandom} text='next anecdote' />
      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVoted]} <br/>
      has {points[mostVoted]} votes <br/>
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