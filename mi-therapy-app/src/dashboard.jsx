import { useState } from "react";
import { Link } from "react-router-dom"


function Dashboard ({mock}) {
  const [usersClients, setUsersClients] = useState([])

  const currentUser = mock.slice();
  console.log(currentUser, 'current user')
  const firstName = currentUser[0].name;
  console.log(firstName,'name')
  

  return (
    
    <div id="welcome">
      <nav id="home-nav">
        <h2 id="greet">Welcome {firstName}</h2>
        <ul id="home-btn-list">
          <button className="home-btn"><Link to="clientform">Add a new client</Link> </button>
          <button className="home-btn"><Link to="clients">View current client list</Link> </button>
          <button className="home-btn"><Link to="calender">Calender</Link> </button>
          <button className="home-btn"><Link to="accounts">Accounts</Link> </button>
        </ul>
      </nav>
      <div id="today">
        <h2>What this week looks like...</h2>
        <div id="week-ahead"></div>
      </div>
    </div>
    
  )
}

export default Dashboard