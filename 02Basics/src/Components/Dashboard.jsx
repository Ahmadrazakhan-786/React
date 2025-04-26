import React from 'react'
import {Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h2 className='text-fuchsia-600'> My Dashboard</h2>

        <nav>
            <Link to="profile" className='text-violet-600'>Profile</Link> | {" "}
            <Link to="settings" className='text-violet-700'>Settings</Link>
        </nav>
        <hr />

        <Outlet/>
    </div>
  )
}

export default Dashboard