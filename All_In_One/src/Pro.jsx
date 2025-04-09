import { useState } from 'react';
import './Pro.css';
const Pro = ()=>{

// const [a, setA] = useState(10);

// const changeA =()=>{
//     console.log('chal gya bhai');
//     setA('ark');
// }

const [num, setnum] = useState(0); // hooks: variable of react



    return (
        <div>
            {/* <h1>Username is {user} </h1> */}
            {/* <button onClick={ChangeUser}>Change User</button> */}
            {/* <h1>value of a is {a}</h1>
            <button onClick={changeA}>Changed A</button> */}
            <h3>Number is {num}</h3>
            <button onClick={function(){
                setnum(num+15);
            }}>Increment</button>
            <button onClick={function(){
                setnum(9);
            }}>Decrement</button>
            <h4 className='text-4xl bg-pink-700 text-black'>hiii guys</h4>
            
        </div>
        
    )
}

export default Pro;