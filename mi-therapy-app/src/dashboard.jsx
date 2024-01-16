import { useState } from "react";
import { Link } from "react-router-dom"
import React from "react";
import { InlineWidget } from "react-calendly";
import Calender from "./componants/calender";


function Dashboard ({current}) {
  const [usersClients, setUsersClients] = useState([])
  
  const currentUser = current.slice();
  
  return (
    
    <div id="welcome">
      <nav id="home-nav">
        <h2 id="greet">Welcome {currentUser[0].firstName}</h2>
        <ul id="home-btn-list">
          <button className="home-btn"><Link className="home-link" to="client-form">Add a new client</Link> </button>
          <button className="home-btn"><Link className="home-link" to="clients">View current client list</Link> </button>
          <button className="home-btn"><Link className="home-link" to="calender">Calender</Link> </button>
          <button className="home-btn"><Link className="home-link" to="accounts">Accounts</Link> </button>
        </ul>
      </nav>
      <div id="today">
        <h2>What this week looks like...</h2>
        <div id="week-ahead">
          
        </div>
      </div>
    </div>
    
  )
}

export default Dashboard