import React from "react";
const Form = ()=>{
    return(
        <div>
           <form >
            <input className="px-4 py-3 text-xl m-5 rounded " type="text" placeholder="Enter your name" />
            <button className="px-4 py-3 text-white m-5 text-xl font-semibold bg-emerald-600 rounded">Submit</button>
           </form>
        </div>
    )
}

export default Form;