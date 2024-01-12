

function Profile ({current}) {

  const userDetails = current.slice();

  return (
    <div id="welcome">
      <div id="profile-box">
        
          <div className="profile-div">
          <label className="profile-lable">first name</label>
            <div className="profile-item"><p>{userDetails[0].firstName}</p></div>
          </div>
          <div className="profile-div">
            <label className="profile-lable">last name</label>
            <li className="profile-item"><p>{userDetails[0].lastName}</p></li>
          </div>
          <div className="profile-div">
            <label className="profile-lable">email address</label>
            <li className="profile-item"><p>{userDetails[0].email}</p></li>
          </div>
          <div className="profile-div">
            <label className="profile-lable">password</label>
            <li className="profile-item"><p>{userDetails[0].password}</p></li>
          </div>
        
      </div>
    </div>
  )
}

export default Profile