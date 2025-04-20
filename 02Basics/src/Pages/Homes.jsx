import React from 'react'
import { Link } from 'react-router-dom'

const Homes = () => {
  return (
    <div>
        <h2>Welcome to Home Page</h2>
        <Link to="/dashboard/profile">Go to Profile</Link><br />
      <Link to="/dashboard/settings">Go to Settings</Link>
    </div>
  )
}

export default Homes