import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
        <h3>{props.ProductName}</h3>
        <h2>{props.Price}</h2>

        <p>{props.available ? 'In Stock ✅' : 'Out of Stock ❌'}</p>
    </div>
  )
}

export default ProductCard