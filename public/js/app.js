// navbar hover effect
const navMenuTabs = Array.from(document.querySelectorAll('.navbar-section .menu li'));
navMenuTabs.forEach((tab)=>{
    tab.addEventListener('mouseenter',()=>{
        if(tab.classList.value.includes('active-menu')){
            return;
        }
        tab.classList.add('hover');
    })

    tab.addEventListener('mouseleave',()=>{
        if(tab.classList.value.includes('hover')){
            tab.classList.remove('hover');
        }
        return;
    })
})

// navbar toggling functionality

const navbarBars = document.querySelector('.navbar-section .bar');
const navbarCross = document.querySelector('.navbar-section .cross');
const navMenu = document.querySelector('.navbar-section .menu');
const loginButton = document.querySelector('.navbar-section .login');

navbarBars.addEventListener('click',()=>{
    navbarBars.classList.add('d-none');
    navbarCross.classList.remove('d-none');
    navbarCross.classList.add('d-block');
    navMenu.classList.remove('d-none');
    navMenu.classList.add('d-flex');
    loginButton.classList.remove('d-none')
    loginButton.classList.add('d-block')
})

navbarCross.addEventListener('click',()=>{
    navbarBars.classList.remove('d-none');
    navbarCross.classList.add('d-none');
    navbarCross.classList.remove('d-block');
    navMenu.classList.remove('d-flex');
    navMenu.classList.add('d-none');
    loginButton.classList.remove('d-block')
    loginButton.classList.add('d-none')
})