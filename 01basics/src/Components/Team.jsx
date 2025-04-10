import React from 'react'
import Member from './Member'
import Project from './Project'

const Team = () => {
  return (
    <div>
        {/* <ul>
            <li>Ahmad</li>
            <li>Ashir</li>
            <li>Zaid</li>
        </ul> */}

        {/* <h2>Hacakthon team members 🧠</h2>
        <ul>
            <Member name = "Ark" />
            <Member name = "Ash" />
            <Member name = "Zaid" /> 
        </ul>
        <ul> */}

        <Project title = "Task Manager" tech ="React" />
        <Project title = "Fair Deal" tech = "Full Stack" />
        <Project title="Quiz App" tech="React + JSON Data" />
        
    </div>
  )
}

export default Team