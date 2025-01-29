import React, { useState } from "react";

const Form = ()=>{

    const submitHandler = (e)=>{
        e.preventDefault(e); // it stops the page reloading behaviour
        console.log(username);
        setusername('');
    }

    const [username, setusername] = useState('')

    return(
        <div>
           <form onSubmit={(e)=>{
            submitHandler(e);
           }}>
            <input 
            value={username}
            onChange={(e)=>{
                setusername(e.target.value);
            }}
            className="px-4 py-3 text-xl m-5 rounded " 
            type="text" 
            placeholder="Enter your name" 
            />
            <button className="px-4 py-3 text-white m-5 text-xl font-semibold bg-emerald-600 rounded">Submit</button>
           </form>
        </div>
    )
}

export default Form;