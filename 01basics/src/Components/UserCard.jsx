import React from 'react'

const UserCard = (props) => {
  return (
    <div>
        
        <h4>{props.name}</h4>
        <p>{props.email}</p>
    </div>
  )
}

export default UserCard