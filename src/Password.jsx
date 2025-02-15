import React from 'react'
import { useState, useCallback } from 'react'

const Password = () => {

    const [length, setlength] = useState(8)
    const [numAllowed, setnumAllowed] = useState(false)
    const [charAllowed, setcharAllowed] = useState(false)
    const [password, setpassword] = useState("")

    const passwordGenerator = useCallback(() =>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%^&*-_+=[]{}`~"

        for(let i=1; i<=Array.length;i++){
          let char = Math.floor(Math.random() * str.length + 1)
          pass = str.charAt(char)
        }

        setpassword(pass)

    }, [length,numAllowed,charAllowed,setpassword])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 '>
      <h1 className='text-white text-center my-3 '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly

        />
      </div>
    </div>
    </>
  )
}

export default Password