import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setdata] = useState({})
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res))
        console.log(data)
    },[currency])
    console.log(data);
    return data
}


export default useCurrencyInfo;