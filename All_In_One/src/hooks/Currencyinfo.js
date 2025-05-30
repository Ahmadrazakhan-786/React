import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setdata] = useState({})
    useEffect(()=> {
        fetch(`https://api.frankfurter.app/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]))
        console.log(data)
    },[currency])
    console.log(data);
    return data
}


export default useCurrencyInfo;