import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom";
import About from './pages/About';

const Api = ()=>{

    // const [data, setData] = useState([])

    // const getData = async ()=>{
    //     const response = await axios.get('https://picsum.photos/v2/list')
    //     setData(response.data)
    // }

    // useEffect(()=>{  // useeffect is used to execute the fn reapetedly
    //     getData()
    // },[])
    return (
        // <div className="p-10">
            // {/* <button onClick={getData} className="bg-teal-700 text-white font-semibold text-2xl px-7 py-4 rounded active:scale-90">Get Data</button> */}
        //     <div className="p-5 mt-5 bg-gray-950">hello</div>
        //     {data.map(function(elem,idx){
        //         return <div key={idx} className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3">
        //             <img className="h-40" src={elem.download_url} alt="" />
        //             <h1>{elem.author}</h1>
        //         </div>
        //     })}
        // </div>
       <div>
        <Routes>
            <Route path="/about" element={<About/>}/>
        </Routes>
       </div>
        
    )
}

export default Api;