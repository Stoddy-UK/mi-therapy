import { useState } from "react";
import { useNavigate } from "react-router-dom"
import appService from "../Api-service";

const initialState = {
  firstName: '', lastName: '', email: '', dob: '', telNum: '', 
  hourlyRate: '', address: '', postCode: '', gpAddress: '',
  emergencyPhone: ''
}

function NewClient ({current}) {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState, 
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, dob, telNum, hourlyRate, address, postCode, 
    gpAddress, emergencyPhone } = state;
    const client1 = { firstName, lastName, email, dob, telNum, hourlyRate, address, postCode, 
      gpAddress, emergencyPhone };
    const client = {...client1, therapistId: current[0]._id}
    // client.therapistId = current[0]._id
    console.log(client, '-- new client obj')
    const res = await appService.newClient(client);
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState)
    } else {
      console.log('SUCSESS')
      setState(initialState)
    }
  }

  return (
    <main id="client-main">
     <p id="p-details">Enter new client details</p>
      <form id="client-form" onSubmit={handleSubmit}>       
        <div className="client-form-box">
          <div className="client-form">
            <label className="form-label">First name</label>
            <input 
            name="firstName"
            value={state.firstName}
            type="text" 
            className="client-input" 
            onChange={handleChange}
            />
          </div>
          <div className="client-form">
            <label className="form-label">Last name</label>
            <input 
            name="lastName"
            value={state.lastName}
            type="text" 
            className="client-input" 
            onChange={handleChange}
            />
          </div>
          <div className="client-form">
            <label className="form-label">Email</label>
            <input
            name="email" 
            value={state.email}
            type="email" 
            className="client-input" 
            onChange={handleChange}
            />
          </div>
          <div className="client-form">
            <label className="form-label">Date of birth</label>
            <input 
            name="dob"
            value={state.dob}
            type="text" 
            className="client-input" 
            onChange={handleChange}
            />
          </div>
          <div className="client-form">
            <label className="form-label">Moblie number</label>
            <input 
            name="telNum"
            value={state.telNum}
            type="number" 
            className="client-input"
            onChange={handleChange} 
            />
          </div>
        </div>
        <div className="client-form-box">
          <div className="client-form">
            <label className="form-label">Agreed session rate</label>
            <input 
            name="hourlyRate"
            value={state.hourlyRate}
            type="text" 
            className="client-input" 
            onChange={handleChange}
            />
          </div>
          <div className="client-form">
            <label className="form-label">First line of address</label>
            <input 
            name="address"
            value={state.address}
            type="text" 
            className="client-input" 
            onChange={handleChange}
            />
          </div>
          <div className="client-form">
            <label className="form-label">Post code</label>
            <input 
            name="postCode"
            value={state.postCode}
            type="text" 
            className="client-input" 
            onChange={handleChange}
            />
          </div>
          <div className="client-form">
            <label className="form-label">GP practise</label>
            <input 
            name="gpAddress"
            value={state.gpAddress}
            type="text" 
            className="client-input" 
            onChange={handleChange}
            />
          </div>
          <div className="client-form">
            <label className="form-label">Emergency contact number</label>
            <input 
            name="emergencyPhone"
            value={state.emergencyPhone}
            type="number" 
            className="client-input" 
            onChange={handleChange}
            />
          </div>
        </div>
      <button id="new-client-btn" type="submit">Create new client</button>
      </form>
    </main>
  )
}

export default NewClient