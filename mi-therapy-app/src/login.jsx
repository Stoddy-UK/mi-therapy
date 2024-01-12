import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login ({setCurrent, setIsLoggedIn, mock, setMock}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate();
  
  const tryLogin =  (e) => {
    e.preventDefault();

    const details = [{
      email: email,
      password: password
    }]
    
    const shallowMock = mock.slice();
    const findUser = shallowMock.filter((detail) => detail.email !== details.email)
    
    if (findUser.password == details.password) {
      setIsLoggedIn(true);
      setCurrent(findUser)
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