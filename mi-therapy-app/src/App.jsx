import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
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
import appService from './Api-service';
import BookSession from './componants/bookSession';

function App() {
  const [clientSessions, setClientSessions] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginForm, setLoginForm] = useState(true)
  const [current, setCurrent] = useState([])
  const [userClients, setUserClients] = useState([])
  const [session, setSessions] = useState([])
  const [thisClient, setThisClient] = useState()

  useEffect(()=>{
    const currentUser = current.slice();
    const getSession = async () => {
    const res = await appService.getSessions(currentUser);
      if (res) {
        setClientSessions(res)
        console.log(res,'--res')
      } else {
        console.log('we lost a lot of good sessions that day!')
      }
    }
    getSession()
  },[current])
  
  useEffect(()=>{
    const getData = async () => {
      const userId = current.slice();
      const res = await appService.getClients(userId);
      if (res) {
        setUserClients(res)
        console.log('Succesful session raid!')
      } else {
        console.log('it went tits-up')
      }
    }
    getData()
  },[current])

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
          />} />
          <Route path='home' element={<Dashboard 
            current={current}
          />} />
          <Route path='me' element={<Profile current={current} setCurrent={setCurrent}/>} />
          <Route path='logout' element={<Logout setIsLoggedIn={setIsLoggedIn} setCurrent={setCurrent} />} />
          <Route path='home/client-form' element={<NewClient 
            current={current} 
            userClients={userClients} setUserClients={setUserClients} 
          />} />
          <Route path='home/clients' element={<ClientList 
            userClients={userClients} setUserClients={setUserClients} 
            thisClient={thisClient} setThisClient={setThisClient}
          />} />
          <Route path='home/calender' element={<Calender />} />
          <Route path='home/accounts' element={<Accounts />} />
          <Route path='home/clients/create' element={<BookSession 
            thisClient={thisClient} setThisClient={setThisClient}
            clientSessions={clientSessions} setClientSessions={setClientSessions}
            />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
