import { useState,useEffect } from "react";

const usetimer = () =>{
    const [count, setcount] = useState(0);

    useEffect(() => {
     const timer = setInterval(() => {
        setcount(prev => prev + 1)
     }, 1000);
    
      return () => {
        clearInterval(timer);
      }
    }, []);

    return count;
}

export default usetimer;