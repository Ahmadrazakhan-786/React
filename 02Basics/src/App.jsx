import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './Components/InputBox'
import DisplayBox from './Components/DisplayBox'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Homes from './Pages/Homes'
import User from './Pages/User'
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'

function App() {
    // const [text, settext] = useState('')

  return (
    <>
     {/* <h2>Lifted State Example</h2>
     
     <InputBox text={text} settext={settext}/>
     <DisplayBox text={text}/> */}



     {/* <Router>
      <div>
        
        <nav>
         <Link to="/">Home</Link>  |{" "}
         <Link to="/about">About</Link>  |{" "}
         <Link to="/contact">Contact</Link>

        </nav>

         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
         </Routes>
      </div>
     </Router> */}

      {/* <Router>
      <nav>
         <Link to="/">Home</Link>  |{" "}
         <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
         
         </Routes>

      </Router> */}

      {/* <Router>

        <nav>
          <Link to="/">Homes</Link> |
          <Link to="/user/23">User 23</Link> |
          <Link to="/user/99">User 99</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Homes/>}/>
          <Route path='user/:id' element={<User/>}/>
        </Routes>

      </Router> */}

      <Router>
      <nav className='flex items-center justify-between m-5'>
          <Link to="/">Home</Link> 
          <Link to="/products">Products</Link>
        </nav>

        <Routes>
        <Route path="/" element={<h2>Welcome to our store</h2>} />
          <Route path='/products' element={<Products/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
