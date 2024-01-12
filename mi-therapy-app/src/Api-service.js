const BASE_URL = 'http://localhost:3000';

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
}