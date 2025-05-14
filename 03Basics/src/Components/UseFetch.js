import { useEffect, useState } from "react";


const useFetch = (url) =>{

    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
            setloading(true);
            let response = await fetch(url);
            if(!response.ok) throw new Error('Data not found');
            let json = await response.json();
            setdata(json);
            seterror(null);
        } catch (err) {
            seterror(err.message);
            setdata(null);
        } finally {
        setloading(false);
      }
      };
       fetchData()
    }, [url])

     return { data, loading, error };
    
}

export default useFetch;
