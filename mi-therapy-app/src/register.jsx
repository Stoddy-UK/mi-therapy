import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Register ({setCurrent, setIsLoggedIn}) {

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formatName = (input) => {
    const fullName = input.split(' ');
    const fName = fullName[0];
    const lName = fullName[1];
    setFirstName(fName);
    setLastName(lName)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      body: JSON.stringify(createUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const profile = await response.json();
    if (!response.ok) {
      console.log(profile.error)
    }
    if (response.ok) {
    
    setCurrent([createUser]);
    setIsLoggedIn(true)

    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')

    return navigate('home')
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>Register here to create an account.</p>
      <div className="input-field">
      <label className="form-label">Name</label>
      <input 
        onChange={(e)=>formatName(e.target.value)}
        type="text" 
        placeholder=" enter full name..."
        className="form-input"
        />
      </div>
      <div className="input-field">
      <label className="form-label">Email</label>
      <input 
        onChange={(e)=>setEmail(e.target.value)}
        type="email" 
        placeholder=" enter email..."
        className="form-input"
        />
      </div>
      <div className="input-field">
      <label className="form-label">Password</label>
      <input 
        onChange={(e)=>setPassword(e.target.value)}
        type="password" 
        placeholder=" enter password..."
        className="form-input"
        />
      </div>
      <button 
      type="submit"
      className="form-btn"
      >create new account</button>
    </form>
  )

}

export default Register