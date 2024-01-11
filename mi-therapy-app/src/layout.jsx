import { Outlet, Link } from "react-router-dom";

function Layout ({isLoggedIn, setLoginForm}) {

  return (
    <main>
      <div className='top-bar'>
        {!isLoggedIn ? 
          <div className="inner-top-bar">
            <h1>MiTherapy</h1>
            <div id="login-btns">
              <button onClick={()=>{setLoginForm(true)}}>Login</button>
              <button onClick={()=>{setLoginForm(false)}}>Register</button>
            </div>
          </div> :
          <div className="inner-top-bar">
            <h1>MiTherapy</h1>
            <div id="top-links">
              <Link to="home">home</Link>
              <Link to="me">my profile</Link>
              <Link to="logout">logout</Link>
            </div>
          </div> 
        }
      </div>
      <div className="welcome">
        <Outlet />
      </div> 
    </main>
  )
}

export default Layout