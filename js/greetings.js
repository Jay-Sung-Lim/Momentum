const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginBtnSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
  deleteButton.addEventListener('click', onDeleteBtnClick);
  greeting.appendChild(deleteButton);
}

function onDeleteBtnClick(event) {
  localStorage.removeItem(USERNAME_KEY);
  greeting.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = '';
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = '';
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginBtnSubmit);
} else {
  paintGreetings(savedUsername);
}
