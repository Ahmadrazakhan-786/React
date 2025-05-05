import React, { useRef } from 'react'

const InputFocus = () => {
    const inputRef = useRef(null)

    const handleFocus = () =>{
        inputRef.current.focus();
    }
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-500'>
        <h1 className='text-2xl font-semibold mb-4'>
        🎯 useRef Demo
        </h1>
        <input 
        ref={inputRef}
        type="text" 
        placeholder='Type here...'
        className='border border-black px-4 py-2 rounded mb-3'
        />
        <button
        onClick={handleFocus}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            Focus Input
        </button>
    </div>
  )
}

export default InputFocus