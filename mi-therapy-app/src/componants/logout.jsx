import { useNavigate } from "react-router-dom";


function Logout ({setIsLoggedIn, setCurrent}) {

  const navigate = useNavigate()

  const logout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false)
    setCurrent([])
    return navigate('/')
  }
  return (
    <div id="welcome">
      <div id="logout-box">
        <h2>End current session and logout...</h2>
        <button onClick={logout} id="logout-btn">yes, my work here is done</button>
      </div>
    </div>
  )
}

export default Logout