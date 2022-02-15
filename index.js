let menu = document.querySelector('#side__menu');
let sideBar = document.querySelector('.side__bar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  sideBar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  sideBar.classList.remove('active');
}

let popup = document.querySelector('.popup__image');

popup.onclick = () => {
  popup.style.display = 'none';
};

let images = document.querySelectorAll('.image__container img');

images.forEach (img => {
  img.onclick = () => {
    let imgSrc = img.getAttribute('src');
    popup.style.display = 'flex';
    popup.querySelector('img').src = imgSrc
  }
});


