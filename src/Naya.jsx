import React from 'react'

const Naya = () => {

  let counter = 15

  const addvalue = ()=>{
    console.log("clicked",Math.random())
    counter += 1
  }

  const removevalue = () =>{
    console.log("value removed")
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter values : {counter}</h2>
    
    <button onClick={addvalue}>Add value</button>
    <br />
    <button onClick={removevalue}>Remove value</button>
    </>

  )
}

export default Naya