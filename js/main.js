const searchContainer = document.querySelector(".search-container");
const closeSearchContainer = document.querySelector("#closeSearch");
const hamburger = document.querySelector('.hamburger')
const burgerMenuShown = document.querySelector('.burger-menu')
const headerTop = document.querySelector('.header-top')
const dropDownButton = document.querySelectorAll('.dropdown-button');

const searchWidth = () => {
    searchContainer.classList.add("active");
}
const closeSearch = () => {
    searchContainer.classList.remove('active');
}

const burgerMenu = () => {
    hamburger.classList.toggle('active');
    burgerMenuShown.classList.toggle('active');
    headerTop.classList.toggle('active');
}
dropDownButton.forEach(n => n.addEventListener('click', () => {
    n.parentElement.parentElement.classList.toggle('active');
}))

console.log(document.body.clientWidth > 768 && headerTop.classList.contains('active'))
