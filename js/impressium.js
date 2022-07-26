const hamburger = document.querySelector('.hamburger')
const burgerMenuShown = document.querySelector('.burger-menu')
const headerTop = document.querySelector('.header-top')
const dropDownButton = document.querySelectorAll('.dropdown-button');



const burgerMenu = () => {
    headerTop.style.position = 'fixed';
    if(Number(headerTop.style.top) > 40){
      headerTop.style.background = '#none';
    }else {
      headerTop.style.background = '#191428';
    }
    headerTop.style.top = `0`
    hamburger.classList.toggle('active');
    burgerMenuShown.classList.toggle('active');
    headerTop.style.zIndex = '9999'
  }
dropDownButton.forEach(n => n.addEventListener('click', () => {
    n.parentElement.parentElement.classList.toggle('active');
}))