import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' 
import './App.css'
import Dashboard from './dashboard';
import Layout from './layout';
import OpenScreen from './openScreen';
import Profile from './componants/profile';
import Logout from './componants/logout';
import NewClient from './componants/newClient';
import ClientList from './componants/clientList';
import Calender from './componants/calender';
import Accounts from './componants/accounts';

function App() {
  const [mock, setMock] = useState([
    {firstName: "Alice",
    lastName: "Stoddart",
    email: "alice@mail.com",
    password: "Stoddy"}
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState(true)
  const [current, setCurrent] = useState([])
  

  return (
    <Router>
      <Routes >
        <Route path='/' element={<Layout 
        setIsLoggedIn={setIsLoggedIn} 
        setLoginForm={setLoginForm}
        isLoggedIn={isLoggedIn}
        />} >
          <Route index element={<OpenScreen 
          current={current} setCurrent={setCurrent}
          isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
          loginForm={loginForm} setLoginForm={setLoginForm}
          mock={mock} setMock={setMock}
          s
          />} />
          <Route path='home' element={<Dashboard 
          current={current}
          mock={mock}
          />} />
          <Route path='me' element={<Profile current={current}/>} />
          <Route path='logout' element={<Logout setIsLoggedIn={setIsLoggedIn} setCurrent={setCurrent} />} />
          <Route path='clientform' element={<NewClient />} />
          <Route path='clients' element={<ClientList />} />
          <Route path='calender' element={<Calender />} />
          <Route path='accounts' element={<Accounts />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
