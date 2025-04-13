import React from 'react'

const StudentList = () => {

    const students = ['Ahmad', 'Zaid', 'Ashir', 'Ahshan'];

  return (
    <div>
        <h2>Lists of Students</h2>
        <ul style={{listStyleType: 'none'}}>
            {students.map((name, index)=>(
                <li key={index}>
                    {index+1}. {name}
                    </li>
            ))}
        </ul>
    </div>
  )
}

export default StudentList