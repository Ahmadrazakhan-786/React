import axios from "axios"

const Api = ()=>{

    const getData = ()=>{
        console.log("hello")
        const response =  axios.get('https://piscum.photos/v2/list')
        console.log(response)
    }
    return(
        <div className="p-10">
            <button onClick={getData} className="bg-teal-700 text-white font-semibold text-2xl px-7 py-4 rounded active:scale-90">Get Data</button>
            <div className="p-5 mt-5 bg-gray-950">hello</div>
        </div>
    )
}

export default Api;