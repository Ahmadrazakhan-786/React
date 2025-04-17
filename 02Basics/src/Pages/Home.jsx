import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const gotoAbout = () =>{
    navigate('/about');
  }

  return (
    <div>
        <h2>This is Home Page</h2>
        <button onClick={gotoAbout}>Go to About Page</button>
    </div>
  )
}

export default Home