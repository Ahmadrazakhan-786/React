import React from 'react'
import { useParams } from 'react-router-dom';

const products = [
    { id: 1, name: 'iPhone 15', price: '$999', desc: 'Apple flagship phone' },
    { id: 2, name: 'Samsung Galaxy S23', price: '$899', desc: 'Samsung beast phone' },
    { id: 3, name: 'OnePlus 11', price: '$799', desc: 'Fast and smooth' }
  ];

const ProductDetails = () => {

   
    const {id} = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if(!product){
        return <p>Product not found</p>
    }

  return (
    <div>
        <h2 className='text-fuchsia-400'>{product.name}</h2>
        <p className='text-emerald-300'><strong>Price:</strong> {product.price}</p>
        <p className='text-cyan-300'><strong>Description:</strong>{product.desc}</p>
    </div>
  )
}

export default ProductDetails