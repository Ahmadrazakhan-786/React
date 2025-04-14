import React from 'react'

const NewProduct = ({name, price, available}) => {
  return (
    <div style={{
        border: '1px solid #ddd',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        width: '200px'
      }}>
        <h3>{name}</h3>
        <h2>{price}</h2>

        <p>{available ? 'In Stock ✅' : 'Out of Stock ❌'}</p>
    </div>
  )
}

export default NewProduct