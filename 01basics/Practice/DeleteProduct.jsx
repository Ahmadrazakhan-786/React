import React, { useState } from 'react';

const DeleteProduct = () => {
  const [products, setProducts] = useState([
    { name: "Apple", price: "$2", available: true },
    { name: "Banana", price: "$1", available: false },
    { name: "Orange", price: "$3", available: true }
  ]);

  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newAvailable, setNewAvailable] = useState(false);

  const addProduct = () => {
    const newProduct = {
      name: newName,
      price: newPrice,
      available: newAvailable
    };
    
    setProducts([...products, newProduct]);
    setNewName('');
    setNewPrice('');
    setNewAvailable(false);
  };

  const deleteProduct = (indexToDelete) => {
    const updatedProducts = products.filter((_, index) => index !== indexToDelete);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2>List of Products:</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Price"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <br />

      <label>
        <input
          type="checkbox"
          checked={newAvailable}
          onChange={() => setNewAvailable(!newAvailable)}
        />
        Available
      </label>
      <br />

      <button onClick={addProduct}>Add Product</button>

      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <strong>{p.name}</strong> - {p.price} -{" "}
            {p.available ? "✅ In Stock" : "❌ Out of Stock"}
            <button
              onClick={() => deleteProduct(i)}
              style={{ marginLeft: "10px", cursor: "pointer" }}
            >
              Delete Product
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteProduct;
