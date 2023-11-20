const users = [

  {

    username: 'Test_1',

    password: 'abc123'

  }

];


document.querySelector('#loginForm').addEventListener('submit', handleLogin);


function handleLogin(event) {

  event.preventDefault();


  const username = document.getElementById('username').value;

  const password = document.getElementById('password').value;

  console.log("Username - ", username);

  console.log("Password - ", password);


  const userExists = users.some(user =>

    user.username === username && user.password === password);

  console.log("Did user exist - ", userExists);



  if (userExists) {

    window.location.href = './Main_Page.html';

    alert('You have logged in!');

  } else {

    alert('Invalid Username or Password!');

  }

}