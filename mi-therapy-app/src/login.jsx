import { useState } from "react"
import { useNavigate } from "react-router-dom";
import appService from "./Api-service";

function Login ({setCurrent, setIsLoggedIn}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate();
  
  const tryLogin = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password
    }
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const profile = await response.json();
    if (!response.ok) {
      console.log(profile.error)
    }
    if (response.ok) {
      setIsLoggedIn(true);
      setCurrent([profile.userLogin])
    } 
    setEmail('')
    setPassword('')
    return navigate('home')
  };

  return (
    
    <form className="form" onSubmit={tryLogin}>
      <p>Please enter your details below to login.</p>
      <div className="input-field">
      <label className="form-label">Email</label>
      <input 
        onChange={(e)=>{setEmail(e.target.value)}}
        name="email"
        value={email}
        type="email" 
        placeholder="enter email..."
        className="form-input"
        />
      </div>
      <div className="input-field">
      <label className="form-label">Password</label>
      <input 
        onChange={(e)=>{setPassword(e.target.value)}}
        name="password"
        value={password}
        type="password" 
        placeholder="enter password..."
        className="form-input"
        />
      </div>
      <div className="form-btn-box">
        <button type="submit" className="form-btn">login</button>
      </div>
    </form>
    
  )
}

export default Login