const nav = document.querySelector('.nav__menu');
const iconOpen = document.querySelector('#btn-open');
const iconClose = document.querySelector('#btn-close');

iconOpen.addEventListener('click', () => {
    nav.classList.add('active');
    iconClose.style.display = 'block';
    iconOpen.style.display = 'none';
   
});

iconClose.addEventListener('click', () => {
    nav.classList.remove('active');
    iconClose.style.display = 'none';
    iconOpen.style.display = 'block';
})