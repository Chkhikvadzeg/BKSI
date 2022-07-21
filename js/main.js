const searchContainer = document.querySelector(".search-container");
const closeSearchContainer = document.querySelector("#closeSearch");
const hamburger = document.querySelector('.hamburger')
const burgerMenuShown = document.querySelector('.burger-menu')
const headerTop = document.querySelector('.header-top')
const dropDownButton = document.querySelectorAll('.dropdown-button');
const fadeInIMageContainersList = document.querySelectorAll('.fade-in-image-container');
const fadeInImagesList = document.querySelectorAll('.fade-in-image');

const searchWidth = () => {
    searchContainer.classList.add("active");
}
const closeSearch = () => {
    searchContainer.classList.remove('active');
}

const burgerMenu = () => {
    headerTop.style.position = 'relative';
    hamburger.classList.toggle('active');
    burgerMenuShown.classList.toggle('active');
    headerTop.classList.toggle('active');
}
dropDownButton.forEach(n => n.addEventListener('click', () => {
    n.parentElement.parentElement.classList.toggle('active');
}))


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  // Appearing Header on scrolling up and dissapearing when scrolling down.
let currentScrollPos = window.pageYOffset;
  if(prevScrollpos < 40){
    headerTop.style.background = 'transparent';
    headerTop.style.top = `0px`;
    headerTop.style.position = 'relative'
  }else if (prevScrollpos > currentScrollPos) {
    headerTop.style.background = '#191428';
    headerTop.style.top = `0px`;
    headerTop.style.position = 'fixed'
    headerTop.style.zIndex = '9999'
  } else {
    headerTop.style.background = 'transparent';
        headerTop.style.top = `-${headerTop.clientHeight}px`;
        headerTop.style.position = 'relative'
  }
  prevScrollpos = currentScrollPos;

  // Appearing Fading in images when bottom reaches photo's containers top.
  let windowHeight = window.innerHeight;
  fadeInIMageContainersList.forEach(n => {
    let photoContainerTop = n.getBoundingClientRect().top;
    if(photoContainerTop < window.scrollY){
      n.classList.add('active');
    }
  })
}