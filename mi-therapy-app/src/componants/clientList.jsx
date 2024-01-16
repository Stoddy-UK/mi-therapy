import { Link } from "react-router-dom"
import ClientItem from "./clientItem"
import { useState } from "react"

function ClientList ({ userClients, setUserClients, thisClient, setThisClient }) {
  const [edit, setEdit] = useState(false)
  
  const client = thisClient

  const editClick = () => {
    setEdit(true)
  }

  const newSessionClick = (e) => {

  }

  const saveClick = () => {
    setEdit(false)
    const id = client._id
    const updateDb = async () => {
      const response = await fetch(`http://localhost:3000/clients/${id}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(client)
    })  
    const res = await response.json();
    if (!response.ok) {
      console.log(res.error)
    } else {
      console.log('UPDATED')
    }
    }
    updateDb()
  }

  const handleChange = (e) => {
    if (e.target.name == 'firstName') {
      client.firstName = e.target.value
    } else if (e.target.name == 'lastName') {
      client.lastName = e.target.value
    } else if (e.target.name == 'email') {
      client.email = e.target.value
    } else if (e.target.name == 'dob') {
      client.dob = e.target.value
    } else if (e.target.name == 'telNum') {
      client.telNum = e.target.value
    } else if (e.target.name == 'hourlyRate') {
      client.hourlyRate = e.target.value
    } else if (e.target.name == 'address') {
      client.address = e.target.value
    } else if (e.target.name == 'postCode') {
      client.postCode = e.target.value
    } else if (e.target.name == 'gpAddress') {
      client.gpAddress = e.target.value
    } else if (e.target.name == 'emergencyPhone') {
      client.emergencyPhone = e.target.value
    }
  }


  const handleClick = async (client) => {
    const id = client._id;
    const response = await fetch(`http://localhost:3000/clients/${id}`, {
      method: 'DELETE',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const ans = await response.json()
    if (!response.ok) {
      console.log(ans.error)
    } else {
      console.log('deleted')
      const shallow = userClients.slice();
      const newArr = shallow.filter((el) => el._id !== id);
      setUserClients(newArr)
      setThisClient()
    }
  }

  return (
    <div id="welcome">
      <div className="client-list" id="client-list-box">
        {userClients.map((el) => (
          <ClientItem 
            thisClient={thisClient} setThisClient={setThisClient}
            key={el._id}
            el={el}
          />
        ))}
      </div>
      {!edit ? 
      <div className="client-list" id="client-detail-box">
          {thisClient ? 
            <div id="client-deet-box"> 
              <ul>
                <li>name: {client.firstName} {client.lastName}</li>
                <li>address: {client.address}, {client.postCode}</li>
                <li>mobile no. : 0{client.telNum}</li>
                <li>email: {client.email}</li>
                <li>age: {client.dob}</li>
                <li>GP surgery: {client.gpAddress}</li>
                <li>emergency contact no: 0{client.emergencyPhone}</li>
                <li>session rate: {client.hourlyRate}</li>
                <li>number of outstanding sessions:</li>
                <li>total owed:</li>
              </ul> 
              <div className="button-box">
                <button id="del-client" onClick={editClick}>edit client details</button>
                {/* <button id="del-client" type="submit" onClick={()=>newSessionClick(client)}>create a session</button> */}
                <button id="del-client" type="submit"><Link 
                  to="create">create a session
                  </Link></button>

              </div>
            </div>: 
            <p id="client-PH">please sellect a client from your list.</p> }
      </div>: /* renders edit mode*/
          <div className="client-list" id="client-detail-box">
            <div id="client-deet-box"> 
              <ul>
                <li>first name: <input 
                    name="firstName"
                    type="text" 
                    placeholder={client.firstName}
                    onChange={handleChange}
                    /></li>
                <li>last name: <input 
                    name="lastName"
                    type="text" 
                    placeholder={client.lastName}
                    onChange={handleChange}
                    /></li>
                <li>first line of address: <input 
                    name="address"
                    type="text" 
                    placeholder={client.address}
                    onChange={handleChange}
                    /></li>
                <li>postcode: <input 
                    name="postCode"
                    type="text" 
                    placeholder={client.postCode}
                    onChange={handleChange}
                    /></li>
                <li>mobile no. : <input 
                    name="telNum"
                    type="text" 
                    placeholder={client.telNum}
                    onChange={handleChange}
                    /></li>
                <li>email: <input 
                    name="email"
                    type="text" 
                    placeholder={client.email}
                    onChange={handleChange}
                    /></li>
                <li>age: <input 
                    name="dob"
                    type="text" 
                    placeholder={client.dob}
                    onChange={handleChange}
                    /></li>
                <li>GP surgery: <input 
                    name="gpAddress"
                    type="text" 
                    placeholder={client.gpAddress}
                    onChange={handleChange}
                    /></li>
                <li>emergency contact no: <input 
                    name="emergencyPhone"
                    type="text" 
                    placeholder={client.emergencyPhone}
                    onChange={handleChange}
                    /></li>
                <li>session rate:<input 
                    name="hourlyRate"
                    type="text" 
                    placeholder={client.hourlyRate}
                    onChange={handleChange}
                    /></li>
              </ul> 
              <div className="button-box">
                <button id="del-client" onClick={saveClick}>save changes</button>
                <button id="del-client" type="submit" onClick={()=>handleClick(client)}>delete client</button>
              </div>
            </div>
      </div>}
    </div>
  )
}

export default ClientList