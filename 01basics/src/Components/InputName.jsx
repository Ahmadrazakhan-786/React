import React from 'react'
import { useState } from 'react'

const InputName = () => {
    const [name, setname] = useState('') // input state

    const handleChange = (e) =>{
        setname(e.target.value) // update state on every process
    }

  return (
    <div>
        <h2>Enter your name: </h2>
        <input 
          type="text" 
          value={name}
          onChange={handleChange}
          placeholder='Type here ...'
          />

         <p>Your name is: <strong>{name}</strong></p> 
    </div>
  )
}

export default InputName