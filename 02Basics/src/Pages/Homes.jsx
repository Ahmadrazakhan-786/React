import React from 'react'
import { Link } from 'react-router-dom'

const Homes = () => {
  return (
    <div>
        <h2> Hell0 and Welcome to my Home Page</h2>
        <Link to="/dashboard/profile" className='text-red-400'>Go to Profile Section</Link><br />
      <Link to="/dashboard/settings" className='text-emerald-500'>Go to Settings Section</Link>
    </div>
  )
}

export default Homes