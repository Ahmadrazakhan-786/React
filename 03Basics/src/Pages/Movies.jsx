import React, { useEffect , useState} from 'react'
import axios from "axios";


const Movies = () => {

  const [data, setdata] = useState([])

  const API = 'https://jsonplaceholder.typicode.com/users';
  
  const getuserData = async() => {
      try {
        const response =  await axios.get(API);
        console.log(response);
        setdata(response);
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
     getuserData();
  }, [])
  
  

  return (

   <div>
    <ul>
      {
        data.map(() =>{
          
        })
      }
    </ul>
   </div>
    
  )
}

export default Movies