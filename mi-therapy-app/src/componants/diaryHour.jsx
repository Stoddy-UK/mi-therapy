import moment from 'moment'
import { useState } from 'react';


function DiaryHour ({el, index, setNewSession, thisClient, dayInfo, clientSessions, setClientSessions}) {
  
  // const slot = moment().format('LT')
  // const hourArr = today.map((el)=>el.date)



  const client = thisClient;
  const temp = dayInfo.setHours((index+7), 0, 0)
  const initialState = {
    clientId: '', name: '', date: '', therapistId: '',
  }
  // const now = moment().format('ll');
  // const tomorrow = moment(now).add(1, 'days')
  // const thisDay = clientSessions.filter()
  
  
  const handleClick = (e) => {
    setNewSession(initialState);
    const copy = initialState;
    copy.clientId = client._id;
    copy.name = (client.firstName)+' '+(client.lastName)
    copy.date = temp
    copy.therapistId = client.therapistId
    // copy.date = moment(temp).format('MMMM Do YYYY, h:mm:ss a')
    setNewSession(copy)
  }
  // console.log(el,'--element---')
  
  // console.log(moment(today.date).format('LT'),'today.date')
  // console.log(typeof (el),'type of el')
  return (
    <div className="hour">
      {typeof el === "object" ? <p>{el.date}{el.name}</p>:
      <div>
      <p>{el}</p>
      <div className="time-btn" onClick={handleClick}>select time</div>
      </div>}
    </div>
  )
}

export default DiaryHour

// {moment(today.date).format('LT')== el? 
{/* <div>{today.name}</div>
: */}