const menuBtn = document.querySelector('.hamburger');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const cancelCross = document.querySelector('.cancel-cross');
const linkSection =document.getElementsByClassName('menu-link');

menuBtn.addEventListener('click', () => {
    headerNavMobile.classList.remove('hidden')
});

cancelCross.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden')
});

linkSection[0].addEventListener('click', () => {
    headerNavMobile.classList.toggle('hidden')
});

linkSection[1].addEventListener('click', () => {
    headerNavMobile.classList.add('hidden')
});

linkSection[2].addEventListener('click', () => {
    headerNavMobile.classList.add('hidden')
});
