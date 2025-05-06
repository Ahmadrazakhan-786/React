import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Homewa = () => {

    const {darkmode, toggleTheme} = useContext(ThemeContext);

  return (
    <div className={`h-screen flex flex-col items-center justify-center ${darkmode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-3xl font-bold mb-4">useContext Demo</h1>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default Homewa