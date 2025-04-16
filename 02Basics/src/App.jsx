import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './Components/InputBox'
import DisplayBox from './Components/DisplayBox'

function App() {
    const [text, settext] = useState('')

  return (
    <>
     <h2>Lifted State Example</h2>
     
     <InputBox text={text} settext={settext}/>
     <DisplayBox text={text}/>
    </>
  )
}

export default App
