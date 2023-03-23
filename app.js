const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  h1.style.color = 'blue';
}

function handleMouseEnter() {
  h1.innerHTML = 'Mouse is here';
}

function handleMouseLeave() {
  h1.innerHTML = 'Mouse is gone';
}

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}

function handleWindowCopy() {
  alert('copy!');
}

function handleWindowOffline() {
  alert('no wifi');
}

function handleWindowOnline() {
  alert('Wifi On');
}

h1.onclick = handleTitleClick;
h1.addEventListener('mouseenter', handleMouseEnter);
h1.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
