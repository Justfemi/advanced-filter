let menu = document.querySelector('#side__menu');
let sideBar = document.querySelector('.side__bar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  sideBar.classList.toggle('active');
}