import React, { useState } from 'react'
import Square from './Square'

const Buttons = () => {
  const [boxes, setBoxes] = useState([])
  const addASquare = () => {
    setBoxes([...boxes, boxes.length + 1])
  }
  const removeASquare = () => {
    setBoxes(boxes.slice(0, -1))
  }
//     // returns a box with inline parameters, onclick, it will pass in the handleClick function
//     // within the div, it will pass in the array, colorNames, then the hook, currentColor.
//     // The hook will pass in the same method as handleClick
  return (
    <>
    <div>
    <button onClick={addASquare}>Add a Square</button>
    {boxes.map((value) => {
        return <Square />
    })}
    <button onClick={removeASquare}>Remove a Square</button>
    {boxes.map((value) => {
        return null
    })}
    </div>
    </>
  )
}
export default Buttons