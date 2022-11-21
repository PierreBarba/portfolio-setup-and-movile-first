const menuBtn = document.querySelector('.hamburger');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const cancelCross = document.querySelector('.cancel-cross');
const linkSection = document.getElementsByClassName('.menu-link');


menuBtn.addEventListener('click', () => {
    headerNavMobile.classList.remove('hidden')
});

cancelCross.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden')
});

linkSection.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden')
    menuBtn.classList.remove('hidden');
});
