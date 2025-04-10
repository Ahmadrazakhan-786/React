import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    const increase = () => setCount(count+1);
    const decrease = () => setCount(count-1);
    const reset = () => setCount(0);

  return (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick={increase}>➕</button>
        <button onClick={decrease}>➖</button>
        <button onClick={reset}>🔁</button>
    </div>
  )
}

export default Counter