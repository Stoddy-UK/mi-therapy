import Login from './login';
import Dashboard from './dashboard';
import Register from './register';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' 


function OpenScreen ({isLoggedIn, setIsLoggedIn, loginForm, current, setCurrent, mock, setMock}) {

  return (
    <div>
    
      <div id='welcome'>
        <div id="welcome-msg">
          <p>Welcome to MiTherapy</p>
        </div>
        <div id="login-reg">
          {loginForm===true?
            <Login 
            setCurrent={setCurrent}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            mock={mock}
            setMock={setMock}
            />: 
            <Register 
            mock={mock} setMock={setMock}
            setCurrent={setCurrent}
            setIsLoggedIn={setIsLoggedIn}
            />}
        </div>
      </div>: 
        
  </div>
  )
}

export default OpenScreen