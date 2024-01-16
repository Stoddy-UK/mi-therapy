import { useState } from "react"



function ClientItem ({ el, setThisClient }) {

  const handleClick = () => {
    setThisClient(el)
  }

  return (
    <div 
      className="clientItem" 
      key={el._id}
      onClick={()=>handleClick()}
    >
      <h3 className="client-name">name: {el.firstName} {el.lastName}</h3><span>outstanding: {el.unpaidSessions}</span>
      <button className="delete-client">del</button>
    </div>
  )
}

export default ClientItem