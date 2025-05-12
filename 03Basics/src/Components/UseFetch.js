import { useEffect, useState } from "react";


const useFetch = (url) =>{

    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() => {
      const fetchData = () =>{
        try {
            setloading(true);
        } catch (error) {
            
        }
      }
    }, [url])
    
}