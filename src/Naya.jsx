import React from 'react'
import "./Naya.css";
import { useState } from 'react';


const Naya = () => {

  // let counter = 15

const [Counter, setCounter] = useState(5) // hooks

  let addvalue = ()=>{
    console.log("clicked",Math.random())
    if(Counter<=20){
      setCounter(Counter + 1);
    }
    else{
      console.log("out of range");
    }
  }

  const removevalue = () =>{
    console.log("value removed")
    if(Counter>0){
      setCounter(Counter-1)
    }
    else{
      console.log("invalid")
    }
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter values : {Counter}</h2>
    
    <button onClick={addvalue}>Add value {Counter}</button>
    <br />
    <button onClick={removevalue}>Remove value {Counter}</button>
    </>

  )
}

export default Naya