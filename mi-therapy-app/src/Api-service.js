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
  console.log(JSON.stringify(user),'--user')
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

export default appService;