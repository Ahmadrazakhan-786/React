import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [count, setcount] = useState(0)
    const [isRunning, setisRunning] = useState(false)
    const [laps, setlaps] = useState([])

    useEffect(() => {
      let timer;
       if(isRunning){
        timer = setInterval(()=>{
          setcount(prev => prev+1);
        },1000);
       }
    
      return () => {
        clearInterval(timer);
      }
    }, [isRunning]);

    const handleStart = () => setisRunning(true);
    const handleStop = () => setisRunning(false);
    const handleReset = () => {
      setisRunning(false);
      setcount(0);
      setlaps([]);
    }

    const handleLap = () =>{
      setlaps(prev => [...prev,count]);
    }
    
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-500'>
        <h1 className='text-3xl font-bold mb-3'>⏱ Timer</h1>
        <p className='text-2xl text-black ml-5'>{count} seconds passed 💕</p>
        <div className='space-x-4 mt-4'>
          <button 
          onClick={handleStart}
          className='bg-emerald-400 text-white rounded hover:bg-emerald-600 px-4 py-1'
          >Start</button>
          <button
          onClick={handleStop}
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Reset
        </button>

        <button
        onClick={handleLap}
        className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >Lap
        </button>
        </div>

        <div>
          <h2 className='text-xl font-semibold mt-3'>Lap times</h2>
          <ul className='list-disc pl-5'>
            {laps.map((lap,index)=>(
              <li key={index}>Lap {index+1}:{lap} sec</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default UseEffect