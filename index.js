const menuBtn = document.querySelector('.hamburger');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const cancelCross = document.querySelector('.cancel-cross');
<<<<<<< HEAD
const linkSection = document.getElementsByClassName('.menu-link');

=======
const linkSection =document.getElementsByClassName('menu-link');
>>>>>>> 831c3220dcb33de6bbe5c547afee348da17db2c3

menuBtn.addEventListener('click', () => {
    headerNavMobile.classList.remove('hidden')
});

cancelCross.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden')
});
<<<<<<< HEAD
=======

linkSection[0].addEventListener('click', () => {
    headerNavMobile.classList.toggle('hidden')
});

linkSection[1].addEventListener('click', () => {
    headerNavMobile.classList.add('hidden')
});

linkSection[2].addEventListener('click', () => {
    headerNavMobile.classList.add('hidden')
});

>>>>>>> 831c3220dcb33de6bbe5c547afee348da17db2c3

linkSection.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden')
    menuBtn.classList.remove('hidden');
});
