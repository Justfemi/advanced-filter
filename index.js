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

// let search = document.querySelector('#search__box');
document.querySelector('#search__box').oninput = () => {
  let value = document.querySelector('#search__box').value.toLowerCase();
  images.forEach(img => {
    let dataSearch = img.getAttribute('data-search').toLowerCase();
    if(dataSearch.indexOf(value) > -1){
      img.style.display = 'inline-block';
    } else {
      img.style.display = 'none';
    }
  })
}

