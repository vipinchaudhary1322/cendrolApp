import React, { useState } from 'react'
import "./Style.css"

const QuestionOne = () => {
   const [increase,setIncrease]=useState(0);
   const [changecolor,setChangecolor]=useState(false);

   const increment=()=>{
    setIncrease(increase+1);
   }
   const colorChange=()=>{
        if(!changecolor){
          setChangecolor(true);
        }
        else{
          setChangecolor(false);
        }
        
   }
  return (
     <>
     <div className='card'>
      <div className={(changecolor)?'changecolor':'circle'}>
        <h1>{increase}</h1>
        <h5 onClick={increment} >click to increase counter</h5>
      </div>
     </div>
     <div className='btnn'>
     <button onClick={colorChange}>Change color</button>
     </div>
     </>
  )
}

export default QuestionOne