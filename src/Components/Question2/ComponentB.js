import React, { useState } from 'react'
import "./Style.css"

const ComponentB = ({cendol}) => {
    const [counter,setCounter]=useState(cendol)
    const increment=()=>{
        setCounter(counter+10);
    }
  return (
    <>
    <div className='container'>
    <h1>{counter}</h1>
    <button onClick={increment}>Increment</button>
    </div>
    </>
  )
}

export default ComponentB ;