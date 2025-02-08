import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Loader from "./Components/Loader";
import Section from "./Components/Section";
import Harder from "./Components/Harder";
import Footer from "./Components/Footer";
import { DataContext } from "./context/UserContext";

const Api = ()=>{

    const data = useContext(DataContext)
    console.log(data)

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
        {/* <Loader/>
        <Routes>
            <Route path="/" element={< Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/product" element={<Product/>}/>
        </Routes> */}
        <h1>This is an api</h1>
         <Harder />
         <Footer />
         <Section />
       </div>
        
    )
}

export default Api;