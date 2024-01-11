import { useNavigate } from "react-router-dom";


function Logout ({setIsLoggedIn}) {

  const navigate = useNavigate()
  const logout = (e) => {
    e.preventDefault();
    setIsLoggedIn(flase)
    return navigate('/')
  }
  return (
    <div id="welcome">
      <div id="logout-box">
        <h2>End current session and logout...</h2>
        <button onClick={()=>{logout}} id="logout-btn">logout</button>
      </div>
    </div>
  )
}

export default Logout