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

    }, [length,numAllowed,charAllowed,setpassword])
  return (
    <>
    <h1 className='text-10xl text-center mt-10 '>Password Generator</h1>
    </>
  )
}

export default Password