import React from 'react'
import usetimer from './Timer'

const TimerComp = () => {

    const count = usetimer();
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-400'>
        <h2 className='text-3xl font-bold mb-4 text-black'>⏱ Timer Using Custom Hook</h2>
        <p className='bg-blue-400 px-4 py-2 rounded font-semibold hover:bg-emerald-500'>Seconds passed : {count}</p>
    </div>
  )
}

export default TimerComp