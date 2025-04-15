import React, { useState } from 'react'

const DeleteProduct = () => {

    const [products, setProducts] = useState([
        { name: "Apple", price: "$2", available: true },
        { name: "Banana", price: "$1", available: false },
        { name: "Orange", price: "$3", available: true }
      ]);

      const [newName, setnewName] = useState('')
      const [newPrice, setnewPrice] = useState('')
      const [newAvailable, setnewAvailable] = useState(false)

      const addProduct = () =>{
        const newProduct = {
            name:newName,
            price:newPrice,
            available:newAvailable
        }
        setProducts([...products, newProduct])

        setnewName("");
        setnewPrice("");
        setnewAvailable(false)

      }

      const deleteProduct = (indexToDelete) => {
        const updatedProducts = products.filter((_, index) => index !== indexToDelete);
        setProducts(updatedProducts)
      }

  return (
    <div>
        <h2>List of Products</h2>
    </div>
  )
}

export default DeleteProduct