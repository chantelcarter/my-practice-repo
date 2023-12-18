import React from 'react'

const Square = (props) => {
  return (
    <div className="grid">
        {props.squares.map((value, index) => {
            return(
                <main>
            <div className="square" onClick={() => props.handleClick(index)}>
                {value}
            </div>
        </main> 
            )
        })}
    </div>
  )
}
export default Square