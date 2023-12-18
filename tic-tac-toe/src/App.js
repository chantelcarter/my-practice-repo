import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(true)

  const handleClick = (index) => {
    const newSquares = [...squares];
    if (newSquares[index] === null) {
      newSquares[index] = player ? '❌' : '⭕️'
      setSquares(newSquares)
      setPlayer(!player)
    }
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares} handleClick={handleClick}/>
    </>
  )
}

export default App