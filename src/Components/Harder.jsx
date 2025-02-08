import React, { useContext } from 'react'
import { data } from 'react-router-dom'
import { DataContext } from '../context/UserContext'

const Harder = () => {
  const username = useContext(DataContext)
  return (
    <div>
        <h1>Harder {username.age}</h1>
    </div>
  )
}

export default Harder