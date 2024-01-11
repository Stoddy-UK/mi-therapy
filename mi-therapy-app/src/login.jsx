import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login ({isLoggedIn, setIsLoggedIn, mock, setMock}) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate();
  
  const tryLogin =  (e) => {
    e.preventDefault();

    const details = [{
      name: name,
      password: password
    }]
    
    const shallowMock = mock.slice();
    
    if (details.name == shallowMock.name && details.password == shallowMock.password) {
      setIsLoggedIn(true);
      const test = isLoggedIn;
      return navigate('home')
    } 
    setName('')
    setPassword('')
  };

  return (
    
    <form className="form" onSubmit={tryLogin}>
      <p>Please enter your details below to login.</p>
      <div className="input-field">
      <label className="form-label">Name</label>
      <input 
        onChange={(e)=>{setName(e.target.value)}}
        name="name"
        value={name}
        type="text" 
        placeholder="enter full name..."
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