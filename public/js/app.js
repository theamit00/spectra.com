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

// Statements for handling tabs in faq section in about page

const tabs = Array.from(document.querySelectorAll('.tab_container .tab'));
const faqTab1 = document.querySelector('#faq_tab1');
const faqTab2 = document.querySelector('#faq_tab2');
const currentTabTracker = {
    currentAnswer : tabs[0],
}
// console.log(currentAnswerTracker)
tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        currentTabTracker.currentAnswer.classList.remove('active_tab');
        tab.classList.add('active_tab');
        currentTabTracker.currentAnswer = tab;
        if(currentTabTracker.currentAnswer.dataset.tabname === 'tab2'){

            faqTab1.classList.remove('faq_tab_in');
            faqTab1.classList.add('faq_tab_out');

            faqTab2.classList.remove('faq_tab_out');
            faqTab2.classList.add('faq_tab_in');
        }
        else{

            faqTab1.classList.remove('faq_tab_out');
            faqTab1.classList.add('faq_tab_in');

            faqTab2.classList.remove('faq_tab_in');
            faqTab2.classList.add('faq_tab_out');
        }
    })
})

// statements to open/close faq

const faqs = Array.from(document.querySelectorAll('.faq_container .faq'));
const faqTabTracker = {
    currentFaqTab : null,
    prevFaqTab : null,
    currentAnswer : null,
    prevAnswer : null,
    currentOpenIcon : null,
    currentCloseIcon : null,
    prevOpenIcon : null,
    prevCloseIcon : null,

}
faqs.forEach((faq)=>{
    faq.addEventListener('click',()=>{
        let answer = faq.querySelector('.faq_container .faq .answer');
        let openIcon = faq.querySelector('.faq_container .faq .open_icon')
        let closeIcon = faq.querySelector('.faq_container .faq .close_icon')

        faq.classList.add('active_faq');

        // faq.style.background = "rgb(248,246,242)";
        // answer.style.display = 'flex';
        // openIcon.style.display = 'none';
        // closeIcon.style.display = 'block';


        faqTabTracker.currentFaqTab = faq;
        // faqTabTracker.currentAnswer = answer;
        // faqTabTracker.currentOpenIcon = openIcon;
        // faqTabTracker.currentCloseIcon = closeIcon;

        if(faqTabTracker.currentFaqTab === faqTabTracker.prevFaqTab ){
            faq.classList.remove('active_faq');
        //     faq.style.background = '#fff';
        //     answer.style.display = 'none';
        //     openIcon.style.display = 'block';
        //     closeIcon.style.display = 'none';

            faqTabTracker.currentFaqTab = null;
        //     faqTabTracker.currentAnswer = null;
        //     faqTabTracker.currentOpenIcon = null;
        //     faqTabTracker.currentCloseIcon = null;

            faqTabTracker.prevFaqTab = null;
        //     faqTabTracker.prevAnswer = null;
        //     faqTabTracker.prevOpenIcon = null;
        //     faqTabTracker.prevCloseIcon = null;
        //     console.log("current tab closed")
            return;
        }

        if(faqTabTracker.prevFaqTab){
            faqTabTracker.prevFaqTab.classList.remove('active_faq');
        //     faqTabTracker.prevAnswer.style.display = 'none';
        //     faqTabTracker.prevOpenIcon.style.display = "block";
        //     faqTabTracker.prevCloseIcon.style.display = 'none';

        //     // console.log("prev tab closed")
        }

        
        faqTabTracker.prevFaqTab = faqTabTracker.currentFaqTab;
        // faqTabTracker.prevAnswer = faqTabTracker.currentAnswer;
        // faqTabTracker.prevOpenIcon = faqTabTracker.currentOpenIcon;
        // faqTabTracker.prevCloseIcon = faqTabTracker.currentCloseIcon;
        // console.log("current tab opened")
        return;


    })
})