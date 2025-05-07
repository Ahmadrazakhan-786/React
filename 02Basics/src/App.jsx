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
import Dashboard from './Components/Dashboard'
import Profile from './Components/Profile'
import Settings from './Components/Settings'
import UseEffect from './Components/UseEffect'
import InputFocus from './Components/InputFocus'
import FactorialCalc from './Components/FactorialCalc'
import { ThemeProvider } from './Components/ThemeContext'
import Homewa from './Components/Homewa'
import Counter from './Components/Counter'

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

      {/* <Router>
      <nav className='flex items-center justify-between m-5'>
          <Link to="/">Home</Link> 
          <Link to="/products">Products</Link>
        </nav>

        <Routes>
        <Route path="/" element={<h2>Welcome to our store</h2>} />
          <Route path='/products' element={<Products/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
      </Router> */}


      {/* <Router>
        <Routes>
        <Route path="/" element={<Homes />} />
          <Route path='/dashboard' element={<Dashboard/>}>
              <Route path='profile' element={<Profile/>}/>
              <Route path='settings' element={<Settings/>}/>
          </Route>
        </Routes>
      </Router> */}

      {/* <UseEffect/> */}

      {/* <InputFocus /> */}

      {/* <FactorialCalc /> */}

      {/* <ThemeProvider>
        <Homewa />
      </ThemeProvider> */}

      <Counter />
    </>
  )
}

export default App
