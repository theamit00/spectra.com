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

// statements for Analytics section carousel

const frames = Array.from(document.querySelectorAll('.analytics-section .frames'));
const frame2 = document.querySelector('.analytics-section #frame-2');
const frame3 = document.querySelector('.analytics-section #frame-3');

const detailContents = Array.from(document.querySelectorAll('.foot-feature-detail .detail-content'));
const scroller = document.querySelector('.foot-feature-detail .scroll-bar .scroller');

detailContents.forEach((detailContent)=>{
    detailContent.addEventListener('click',()=>{
        const frame = detailContent.dataset.frame;
        if(frame === 'frame-1'){
            scroller.style.translate = '0%';
            frame2.style.left = '336px'
            frame3.style.left = '672px'
        }

        if(frame === 'frame-2'){
            scroller.style.translate = '100%';
            frame2.style.left = '24px'
            frame3.style.left = '360px'
        }

        if(frame === 'frame-3'){
            scroller.style.translate = '200%';
            frame2.style.left = '24px'
            frame3.style.left = '48px'
        }

    })
})
