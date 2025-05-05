import React, { useMemo, useState } from 'react'

const FactorialCalc = () => {

    const [number, setnumber] = useState(1)
    const [darkmode, setdarkmode] = useState(false)

    const factorial = useMemo(()=>{
        console.log('Calculating Factorial...');
        const calc = (n) =>{
            return n<=0 ? 1 : n*calc(n-1);
        };
        return calc(number);
    },[number]);

  return (
   <div className='flex flex-col items-center justify-center h-screen bg-gray-500 '>
     <div className= {`p-6 ${darkmode ? 'bg-gray-900 text-white rounded-2xl' : 'bg-white text-black rounded-2xl'}`}>
        <h1 className="text-2xl font-bold mb-4">Factorial Calculator</h1>

        <input 
        type="number"
        value={number}
        className='border p-2 mb-4 rounded'
        onChange={(e) => setnumber(parseInt(e.target.value) || 0)}

        />

        <p className="mb-4">Factorial of a number is : {factorial}</p>

        <button
         className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={() => setdarkmode(prev => !prev)}
        >
            Toggle Dark Mode
        </button>
    </div>
   </div>
  )
}

export default FactorialCalc