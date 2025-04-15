import React from 'react'

const Favfruits = () => {

   const Fruits = ['Apple', 'Mango', 'Banana', 'Grapes', 'Papaya'];

  return (
    <div>
      <h3 className='text-red-400'>🍉 My Favorite Fruits</h3>
          <ul style={{listStyleType: 'none'}}>
            {Fruits.map((name, idx)=>
              <li key={idx}>
                {idx+1}. {name}
              </li>
            )}
          </ul>
    </div>
  )
}

export default Favfruits