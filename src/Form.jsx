import React from "react";

const Form = ()=>{
    const submitHandler = (e)=>{
        e.preventDefault(e); // it stops the page reloading behaviour
        console.log("submitted");
    }

    return(
        <div>
           <form onSubmit={(e)=>{
            submitHandler(e)
           }}>
            <input className="px-4 py-3 text-xl m-5 rounded " type="text" placeholder="Enter your name" />
            <button className="px-4 py-3 text-white m-5 text-xl font-semibold bg-emerald-600 rounded">Submit</button>
           </form>
        </div>
    )
}

export default Form;