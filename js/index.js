const burgerMenu = document.querySelector('.burger-menu');
const navbarList = document.querySelector('.navbar-list');

burgerMenu.addEventListener('click', (el) => {
    burgerMenu.classList.toggle('active');
    navbarList.classList.toggle('active')
})