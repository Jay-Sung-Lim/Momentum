const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';

function onLoginBtnSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add('hidden');
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginBtnSubmit);
