import React, { useState } from "react"

const Square = () => {
    const colorNames = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
    const [color, setColor] = useState(0)
    const handleClick = () => {
        // this is why it was telling me that setColor wasn't defined
        setColor((index) => (index + 1) % colorNames.length)
    
    }
    // const addButton = () => {
    //     setColor(color === 'white')
    //   }
  
    //   const removeButton = () => {
    //     setColor(color === 'white')
    //   }
return (
    <>
  <div className="square" style={{ border: '2px solid black', width: '200px',height: '200px',backgroundColor: colorNames[color] }} onClick={handleClick}></div>
  </>
  )
}
 
//{colorNames[color]}

export default Square