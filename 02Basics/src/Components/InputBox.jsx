import React from 'react'

const InputBox = ({text, settext}) => {
  return (
    <div >

        <input type="text" 
        value={text}
        placeholder='Type Something...'
        onChange={(e)=> settext(e.target.value)}
        />

    </div>
  )
}

export default InputBox