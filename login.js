const createUser = async () => {
  const Email = document.getElementById('emailLogIn');
  const Password = document.getElementById('passwordLogIn');

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      responseType: 'json',

    },
    body: JSON.stringify({
      Email: Email.value,
      Password: Password.value,
    })
  }
  const response = await fetch('https://chefsiaryserver.herokuapp.com/api/user/login', options);
  const resData = await response.json();
  console.log(resData);
  if (response.status===200) {
    alert(resData.message);
    window.location.replace('./home.html')
  }
  else alert(resData.message)
}
const registerForm = document.getElementById('loginform');
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  createUser();
});