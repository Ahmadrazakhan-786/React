import React, { useState } from 'react'

const AddProduct = () => {

    const [products, setproducts] = useState([
        {name:'Apple', price:'2$', available:'true'},
        {name:'Banana', price:'1$', available:'false'}
    ])

    const [newName, setnewName] = useState("")
    const [newPrice, setnewPrice] = useState("")
    const [newAvailable, setnewAvailable] = useState(false)

    const AddProduct = () =>{
        const newProduct = {
            name: newName,
            price: newPrice,
            available: newAvailable
        }

        setproducts([...products, newProduct])

        // Reset Inputs
        setnewName("");
        setnewPrice("");
        setnewAvailable(false);
    }
  return (
    <div>
        <h2>Lists of Products:</h2>
        {/* Add products inputs */}
        <input 
        type="text" 
        placeholder='Product Name'
        value={newName}
        onChange={(e)=> setnewName(e.target.value)}
        />
        <br />

        <input 
        type="text" 
        placeholder='Price Name'
        value={newPrice}
        onChange={(e)=> setnewPrice(e.target.value)}
        />
        <br />

        <label>
         <input type="checkbox" 
         checked={newAvailable}
         onChange={()=> setnewAvailable(!newAvailable)}
         />
         Available
        </label>
        <br />

        <button onClick={AddProduct}>Add Product</button>

         {/* Displaying Products */}
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <strong>{p.name}</strong> - {p.price} -{" "}
            {p.available ? "✅ In Stock" : "❌ Out of Stock"}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AddProduct