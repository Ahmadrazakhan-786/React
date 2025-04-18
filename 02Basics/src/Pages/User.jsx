import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {id} = useParams(); // yaha se url ka dynamic milta hai

  return (
    <div>
        <h2 className='text-pink-400'>User Page</h2>
        <p>This is the detail for user id: <strong>{id}</strong></p>
    </div>
  )
}

export default User