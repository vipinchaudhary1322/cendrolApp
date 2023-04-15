import React, { useState } from 'react'
import "./Style.css";

const BackgroundcolorChange = () => {
     const [backgroundcolor,setBackgroundcolor]=useState(false);

     const buttonColor=()=>{
        if(!backgroundcolor){
          setBackgroundcolor(true);
        }
        else{
          setBackgroundcolor(false);
        }
     }
  return (
    <>
    <div className='container'>
        <button onClick={buttonColor} className={(!backgroundcolor?'buttun':'btn')}>ChangeBackground</button>
    </div>
    </>
  )
}

export default BackgroundcolorChange