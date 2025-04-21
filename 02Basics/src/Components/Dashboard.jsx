import React from 'react'
import {Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h2 className='text-fuchsia-600'>Dashboard</h2>

        <nav>
            <Link to="profile">Profile</Link> | {" "}
            <Link to="settings">Settings</Link>
        </nav>
        <hr />

        <Outlet/>
    </div>
  )
}

export default Dashboard