import React from 'react'
import { useState } from 'react'

const Likes = () => {
    const [likes, setLikes] = useState(0)

    const increase = () => setLikes(likes+1)

  return (
    <div>
        <h2>Likes: {likes}</h2>
        <button onClick={increase}>👍Likes</button>
    </div>
  )
}

export default Likes