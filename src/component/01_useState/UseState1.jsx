import React from 'react'
import { useState } from 'react'

const UseState1 = () => {
  const [number, setNumber] = useState(1);
  function clickCount() {
    setNumber(number + 1)
    console.log(number)
  } 
  
  return (
    <div>
      <button onClick={clickCount}>Click Count</button>
      <p>{number}</p>
      <input type="text" u/>
     
    </div>
  )
}

export default UseState1
