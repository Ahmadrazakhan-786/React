import React from 'react'
import { Link } from 'react-router-dom'

const Homes = () => {
  return (
    <div>
        <h2>Welcome to Home Page</h2>
        <Link to="/dashboard/profile" className='text-red-400'>Go to Profile</Link><br />
      <Link to="/dashboard/settings" className='text-red-400'>Go to Settings</Link>
    </div>
  )
}

export default Homes