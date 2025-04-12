import React, { useState } from 'react'


const NewLoginForm = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [welcome, setwelcome] = useState(false)
    const [showpassword, setshowpassword] = useState(false)
    const [error, seterror] = useState('')
    const [strength, setstrength] = useState('')

    // Login Form Validation
    const handleLogin = () => {
        if(username && password){
            setwelcome(true);
            seterror('')
        } else{
            setwelcome(false);
            seterror('❗ Please fill both fields!')
        }
    }

    // Clear Form
    const handleClear = () => {
        setusername('');
        setpassword('');
        setwelcome(false);
        seterror('');
        setstrength('');
    }

    // check strength of password
    const passwordStrength = (password) =>{
        if(password.length === 0) return '';
        if(password.length < 6) return 'weak';
        if(password.length < 10) return 'medium';

        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
        if(strongRegex.test(password)) return 'strong';

        return 'medium';
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
            onChange={(e) => {
                const newpass = e.target.value
                setpassword(newpass)
                setstrength(passwordStrength(newpass))
            }}
        />

       {/* password strength indicator: */}
          {strength && (
            <p>Strength: {strength}</p>
          )}  

        <label>
        <input 
            type="checkbox" 
            checked={showpassword}
            onChange={() => setshowpassword(!showpassword)}
        /> Show Password
        </label>
        <br /> <br />

        <button onClick={handleLogin}
         disabled={!username || !password}
         style={{
            marginRight: '10px',
            backgroundColor: (!username || !password) ? 'gray' : '#4CAF50',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            cursor: (!username || !password) ? 'not-allowed' : 'pointer'
          }}
        >
            Login
        </button>
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