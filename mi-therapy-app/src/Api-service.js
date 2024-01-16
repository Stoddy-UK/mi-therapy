const BASE_URL = 'http://localhost:3000';

const appService ={};

appService.newUser = async (user) => {
  const response = await fetch(`${BASE_URL}/user`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  const ans = await response.json();
  if (!response.ok) {
    console.log(ans.error)
  }
  if (response.ok) {

  const newArr = mock.slice();
  
  setMock(newArr)
  setCurrent([createUser]);
  setIsLoggedIn(true)

  setFirstName('')
  setLastName('')
  setEmail('')
  setPassword('')

  return navigate('home')
  }
}

appService.login = (user) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    // credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

appService.newClient = async (client) => {
  return fetch(`${BASE_URL}/client-form`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(client)
  })
    .then((res) => res.json())
    .catch((error) => console.log(error))
}

appService.getClients = (userId) => {
  return fetch(`${BASE_URL}/clients`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userId)
  })
  .then((res) => res.json())
  .catch((error) => console.log(error))
}

appService.createNewSession = async(newSess) => {
  console.log(newSess,'--new sess services')
  return fetch(`${BASE_URL}/clients/create`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newSess)
  })
  .then((res) => res.json())
  .catch((error) => console.log(error))
}

appService.getSessions = async (currentUser) => {
  console.log(currentUser,'current user')
  return fetch(`${BASE_URL}/sessions`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(currentUser)
  })
  .then((res) => res.json())
  .catch((error) => console.log(error))
}

export default appService;