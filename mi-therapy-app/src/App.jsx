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
    {name: "Alice Stoddart",
    password: "Stoddy"}
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState(true)
  

  return (
    <Router>
      <Routes >
        <Route path='/' element={<Layout  
        setLoginForm={setLoginForm}
        isLoggedIn={isLoggedIn}
        />} >
          <Route index element={<OpenScreen 
          isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
          loginForm={loginForm} setLoginForm={setLoginForm}
          mock={mock} setMock={setMock}
          s
          />} />
          <Route path='home' element={<Dashboard 
          mock={mock}
          />} />
          <Route path='me' element={<Profile />} />
          <Route path='logout' element={<Logout setIsLoggedIn={setIsLoggedIn}/>} />
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