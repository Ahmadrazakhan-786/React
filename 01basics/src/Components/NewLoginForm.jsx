import React, { useState } from 'react'


const NewLoginForm = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [welcome, setwelcome] = useState(false)
    const [showpassword, setshowpassword] = useState(false)
    const [error, seterror] = useState('')

    const handleLogin = () => {
        if(username && password){
            setwelcome(true);
            seterror('')
        } else{
            setwelcome(false);
            seterror('❗ Please fill both fields!')
        }
    }

    const handleClear = () => {
        setusername('');
        setpassword('');
        setwelcome(false);
        seterror('');
    }

  return (
    <div>
        <h2>🔐 Login Form</h2>

        <input 
            type="text" 
            placeholder='Username'
            value={username}
            onChange={(e) => setusername(e.target.value)}
        />
        <br />

        <input 
            type= {showpassword ? 'text' : 'password'}
            placeholder='password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
        
        />

        <label>
        <input 
            type="checkbox" 
            checked={showpassword}
            onChange={() => setshowpassword(!showpassword)}
        /> Show Password
        </label>
        <br /> <br />

        <button onClick={handleLogin}>Login</button>
        <button onClick={handleClear}>Clear</button>

        {error && (
            <p>{error}</p>
        )}

        {welcome && (
            <p>
                welcome <strong>{username}</strong>
            </p>
        )}
    </div>
  )
}

export default NewLoginForm