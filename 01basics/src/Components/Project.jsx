import React from 'react'

const Project = (props) => {
  return (
    <div>

        <h3>{props.title}</h3>
        <p>Tech Stack : {props.tech}</p>
    </div>
  )
}

export default Project