import { useEffect, useState } from "react";


function Profile ({current, setCurrent}) {
  const [edit, setEdit] = useState(false)
  const [update, setUpdate] = useState('')

  const userDetails = current.slice();

  const handleClick = () => {
    setEdit(true)
  }

  const handleDone = () => {
    setUpdate(userDetails)
    setEdit(false)
  }

  const handleChange = (e) => {
    if (e.target.name == 'firstName') {
      userDetails[0].firstName = e.target.value
    } else if (e.target.name == 'lastName') {
      userDetails[0].LastName = e.target.value
    } else if (e.target.name == 'email') {
      userDetails[0].email = e.target.value
    } else if (e.target.name == 'password') {
      userDetails[0].password = e.target.value
    }
  }

  useEffect(()=>{
    const updatedProfile = update.slice();
    if (update.length===0) return;
    const id = updatedProfile[0]._id;

    const updateDb = async () => {
      const response = await fetch(`http://localhost:3000/me/${id}`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedProfile[0])
    })  
    const res = await response.json();
    if (!response.ok) {
      console.log(res.error)
    } else {
      console.log('UPDATED')
    }
    }
    updateDb();
    setCurrent(userDetails);
  },[update])

  return (
    <div id="welcome">
      <div id="profile-box">      
        <div className="profile-div">
          <label className="profile-lable">first name</label>
          {!edit ? 
          <div className="profile-item"><p>{userDetails[0].firstName}</p></div> : 
          <input 
            name="firstName"
            id="edit-state"
            type="text" 
            className="profile-item" 
            placeholder={userDetails[0].firstName}
            onChange={handleChange}
            />
          }
        </div>
        <div className="profile-div">
          <label className="profile-lable">last name</label>
          {!edit ? 
          <li className="profile-item"><p>{userDetails[0].lastName}</p></li> : 
          <input 
            name="lastName"
            id="edit-state"
            type="text" 
            className="profile-item" 
            placeholder={userDetails[0].lastName}
            onChange={handleChange}
            />
          }
         </div>
        <div className="profile-div">
          <label className="profile-lable">email address</label>
          {!edit ? 
          <li className="profile-item"><p>{userDetails[0].email}</p></li> : 
          <input 
            name="email"
            id="edit-state"
            type="text" 
            className="profile-item" 
            placeholder={userDetails[0].email}
            onChange={handleChange}
            />
          }
         </div>
        <div className="profile-div">
          <label className="profile-lable">password</label>
          {!edit ? 
          <li className="profile-item"><p>{userDetails[0].password}</p></li> : 
          <input 
            name="password"
            id="edit-state"
            type="text" 
            className="profile-item" 
            placeholder={userDetails[0].password}
            onChange={handleChange}
            />
          }
        </div>        
      </div>
      <div className="edit-btn-box">
        {!edit ? 
        <div className="edit-profile" onClick={handleClick}>...edit</div> : 
          <div className="edit-profile" onClick={handleDone}>...done</div>}
      </div>
    </div>
  
  )
}

export default Profile