import { useState } from "react";
import DiaryDay from "./diaryDay";
import moment from 'moment'
import appService from "../Api-service";



function BookSession ({thisClient, setThisClient, clientSessions, setClientSessions}) {
  const [newSession, setNewSession] = useState('')

  const newSess = newSession
  // console.log(newSess,'new session')

  const hours = [];
  const fillHours = () => {
    for (let i = 7; i < 20; i++) {
      if (i<13) {
        hours.push(i+':00 AM')
      } else {
        hours.push((i-12)+':00 PM')
      }
    }
    return hours;
  }
  fillHours()

  const client = thisClient;
  const date = new Date;
  
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(newSession)
    const res = await appService.createNewSession(newSession);
    if (res.error) {
      alert(`${res.message}`)
    } else {
      console.log('SUCSESSFUL SESSION')
      setNewSession('')
    }
  }

  const daysArr = [];
  const mapDays = (date) => {
    for (let i = 0; i < 8; i++) {
      let next = moment(date).add(i,'d')
      daysArr.push(next._d)
    }
  }
  const daysArr2 = [];
  const mapDays2 = (date) => {
    for (let i = 4; i < 8; i++) {
      let next = moment(date).add(i,'d')
      daysArr2.push(next._d)
    }
  }
    mapDays();
    mapDays2();

  return (
    <div id="welcome">
      <div className="session-form">
        <h1 id="new-session-name">{client.firstName} {client.lastName}:</h1>
        <div className="session-item">
          <label>session date</label>
          {newSession? 
          <input 
          type="text"
          className="session-input"
          placeholder={moment(newSess.date).format("MMM Do")}
          />:
          <input type="text" className="session-input" /> }
        </div>
        <div className="session-item">
          <label>session time</label>
          {newSession?
          <input 
          type="text" 
          className="session-input"
          placeholder={moment(newSess.date).format("h:mm a")}
          />:
          <input type="text" className="session-input" /> }
        </div>
        <div className="session-box">
          <label>weekly repeat session</label>
          <input 
          type="checkbox" 
          className="session-input"
          />
        </div>
        <button 
          type="submit" 
          onClick={handleClick}
          className="session-btn">ceate session</button>
      </div>
      <div className="look-ahead">
        <div className="halfweek">
          {daysArr.map((el)=>(<DiaryDay 
            newSession={newSession} setNewSession={setNewSession}
            thisClient={thisClient}
            clientSessions={clientSessions} setClientSessions={setClientSessions}
            el={el}
            hours={hours}
            />))}
        </div>
        <div className="halfweek">
          {daysArr2.map((el)=>(<DiaryDay 
            el={el}
            thisClient={thisClient}
            newSession={newSession} setNewSession={setNewSession}
            clientSessions={clientSessions} setClientSessions={setClientSessions}
            hours={hours}
            />))}
        </div>
      </div>
    </div>
  )
}

export default BookSession