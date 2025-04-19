import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {

    const products = [
        { id: 1, name: 'iPhone 15', price: '$999' },
        { id: 2, name: 'Samsung Galaxy S23', price: '$899' },
        { id: 3, name: 'OnePlus 11', price: '$799' }
      ];
      

  return (
    <div >
        <h2>Product List</h2>
        <ul>
            {products.map((p)=>(
                <li key={p.id}>
                    <Link to={`/product/${p.id}`}>{p.name}</Link> - {p.price}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Products