import React from 'react'
import useFetch from './UseFetch'

const Users = () => {
    const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/users');
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h2 className='text-2xl font-bold mb-4'>📦 Users Lists:-</h2>

        {loading && <p className='text-green-500'>Loading...</p>}
        {error && <p className='text-red-500'>Error: {error}</p>}


        {data && (
            <ul className='list-disc pl-5'>
                {data.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Users