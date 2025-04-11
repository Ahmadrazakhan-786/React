import React, { useState } from 'react'

const LoginForm = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [welcome, setwelcome] = useState(false)

    const handleusername = (e) => setusername(e.target.value)
    const handlepassword = (e) => setpassword(e.target.value)

    const handleLogin = () =>{
        if(username && password){
            setwelcome(true);
        } else{
            alert('plzz fill both the fields..')
        }
    }

  return (
    <div style={{padding: "20px"}}>

        <h2>Login Form</h2>

        <input type="text"
          value={username}
          placeholder='Username'
          onChange={handleusername}
          />

          <br /> <br />

        <input type="password" 
          placeholder='Password'
          value={password}
          onChange={handlepassword}
        />

          <br /> <br />
        <button onClick={handleLogin}>Login</button>

        {welcome && (
            <p style={{ marginTop: "20px", color: "green" }}>
            Welcome, <strong>{username}</strong>!
          </p>
        )}
    </div>
  )
}

export default LoginForm