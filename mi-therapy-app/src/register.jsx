import { useState } from "react"

function Register () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className="form">
      <p>Register here to create an account.</p>
      <div className="input-field">
      <label className="form-label">Name</label>
      <input 
        type="text" 
        placeholder=" enter full name..."
        className="form-input"
        />
      </div>
      <div className="input-field">
      <label className="form-label">Email</label>
      <input 
        type="email" 
        placeholder=" enter email..."
        className="form-input"
        />
      </div>
      <div className="input-field">
      <label className="form-label">Password</label>
      <input 
        type="password" 
        placeholder=" enter password..."
        className="form-input"
        />
      </div>
      <button className="form-btn">login</button>
    </form>
  )

}

export default Register