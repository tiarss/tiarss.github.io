const menuToogle = document.querySelector('.burger input');
const nav = document.querySelector('.tab ul');

menuToogle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})