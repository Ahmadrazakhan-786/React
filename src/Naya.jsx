import React from 'react'
import "./Naya.css";
import { useState } from 'react';
import { Button } from './Components/Button';


const Naya = () => {

  // let counter = 15

// const [Counter, setCounter] = useState(5) // hooks

//   let addvalue = ()=>{
//     console.log("clicked",Math.random())
//     if(Counter<=20){
//       setCounter(Counter + 1);
//     }
//     else{
//       console.log("out of range");
//     }
//   }

//   const removevalue = () =>{
//     console.log("value removed")
//     if(Counter>0){
//       setCounter(Counter-1)
//     }
//     else{
//       console.log("invalid")
//     }
//   }
  return (
    <div>
    {/* <h1>Chai aur react</h1>
    <h2>Counter values : {Counter}</h2>
    
    <button onClick={addvalue}>Add value {Counter}</button>
    <br />
    <button onClick={removevalue}>Remove value {Counter}</button> */}

    <h1 className='bg-red-300 text-black inline-block p-6 text-center  rounded-xl '>Tailwind css</h1>
    <Button username="chai aur react" /> {/* props */}
    <Button username="button" />
      
    </div>

  )
}

export default Naya