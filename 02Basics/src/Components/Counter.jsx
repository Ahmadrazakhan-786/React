import React, { useReducer } from 'react'

const initialstate = 0;

const reducer = (state, action) =>{
    switch(action.type){
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        case 'RESET'    : return 0;
        default : return state;

    }
}

const Counter = () => {

    const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-600'>
        <h1 className='text-2xl font-bold mb-4'>Count : {count}</h1>
        <div className='space-x-4'>
            <button onClick={()=> dispatch({type: 'INCREMENT'})} className='bg-emerald-500 px-4 py-2 rounded font-medium'>INCREMENT</button>
            <button onClick={()=> dispatch({type: 'DECREMENT'})} className='bg-red-500 px-4 py-2 rounded font-medium'>DECREMENT</button>
            <button onClick={()=> dispatch({type: 'RESET'})} className='bg-cyan-500 px-4 py-2 rounded font-medium'>RESET</button>
        </div>
    </div>
  )
}

export default Counter