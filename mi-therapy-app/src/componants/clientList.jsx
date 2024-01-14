import ClientItem from "./clientItem"
import { useState } from "react"

function ClientList ({ userClients, setUserClients }) {
  const [thisClient, setThisClient] = useState()
  const client = thisClient
  console.log(client,'--client')

  const handleClick = async (client) => {
    console.log(client,'---client in function')
    const id = client._id;
    console.log(id,'-- id')
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
      console.log(shallow,'-- shallow copy')
      const newArr = shallow.filter((el) => el._id !== id);
      console.log(newArr, 'new arr')
      setUserClients(newArr)
      setThisClient('')
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
              <button id="del-client" type="submit" onClick={()=>handleClick(client)}>delete this client from your database</button>
            </div>: 
            <p id="client-PH">please sellect a client from your list.</p> }
      </div>
    </div>
  )
}

export default ClientList