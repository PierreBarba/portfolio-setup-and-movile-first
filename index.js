const menuBtn = document.querySelector('.hamburger');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');

menuBtn.addEventListener('click', () => {
    headerNavMobile.classList.remove('hidden')
});