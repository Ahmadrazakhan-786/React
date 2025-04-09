import React, { createContext } from 'react'

 export const DataContext = createContext()
const UserContext = ({children}) => {

    const userData = {
      username:"Ahmad Raza Khan",
      age:21,
      city:"Muzaffarpur",
    }
  return (
    <div>
        <DataContext.Provider value={userData}>
           {children}
        </DataContext.Provider> 
       
    </div>
  )
}

export default UserContext