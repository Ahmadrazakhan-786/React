import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [count, setcount] = useState(0)

    useEffect(() => {
      const timer = setInterval(()=>{
        setcount(prev => prev+1);
      },1000);
    
      return () => {
        clearInterval(timer);
      }
    }, []);
    
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-500'>
        <h1 className='text-3xl font-bold mb-3'>⏱ Timer</h1>
        <p className='text-2xl text-black ml-5'>{count} seconds passed</p>
    </div>
  )
}

export default UseEffect