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



function switch_tab(tab, tab1, tab2, currentTabTracker,back_tab){
    // console.log(currentTabTracker)
    currentTabTracker.currentAnswer.classList.remove('active_tab');
        tab.classList.add('active_tab');
        currentTabTracker.currentAnswer = tab;

        if(currentTabTracker.currentAnswer.dataset.tabname === 'tab2'){

            if(currentTabTracker.currentAnswer.classList.contains('hero_price_tab_controller')){
                if(back_tab){
                    back_tab.style.left = `${currentTabTracker.currentAnswer.getBoundingClientRect().right - currentTabTracker.currentAnswer.getBoundingClientRect().left}px`;
                }
                tab1.classList.remove('pricing_tab_in');
                tab1.classList.add('pricing_tab_out');
    
                tab2.classList.remove('pricing_tab_out');
                tab2.classList.add('pricing_tab_in');
            }

            if(currentTabTracker.currentAnswer.classList.contains('spectra_plans_tab_controller')){
                if(back_tab){
                    back_tab.style.left = `${currentTabTracker.currentAnswer.getBoundingClientRect().right - currentTabTracker.currentAnswer.getBoundingClientRect().left}px`;
                }
                tab1.classList.remove('plans_tab_in');
                tab1.classList.add('plans_tab_out');
    
                tab2.classList.remove('plans_tab_out');
                tab2.classList.add('plans_tab_in');
            }

            if(currentTabTracker.currentAnswer.classList.contains('faq_tab_controller')){
                if(back_tab){
                    back_tab.style.left = `${currentTabTracker.currentAnswer.getBoundingClientRect().right - currentTabTracker.currentAnswer.getBoundingClientRect().left}px`;
                }
                tab1.classList.remove('faq_tab_in');
                tab1.classList.add('faq_tab_out');

                tab2.classList.remove('faq_tab_out');
                tab2.classList.add('faq_tab_in');
            }

        }
        else{

            if(currentTabTracker.currentAnswer.classList.contains('hero_price_tab_controller')){
                if(back_tab){
                    back_tab.style.left = "0px";
                }

                tab1.classList.remove('pricing_tab_out');
                tab1.classList.add('pricing_tab_in');
    
                tab2.classList.remove('pricing_tab_in');
                tab2.classList.add('pricing_tab_out');
            }

            if(currentTabTracker.currentAnswer.classList.contains('spectra_plans_tab_controller')){
                if(back_tab){
                    back_tab.style.left = `${currentTabTracker.currentAnswer.getBoundingClientRect().right - currentTabTracker.currentAnswer.getBoundingClientRect().left}px`;
                }
                tab1.classList.remove('plans_tab_out');
                tab1.classList.add('plans_tab_in');
    
                tab2.classList.remove('plans_tab_in');
                tab2.classList.add('plans_tab_out');
            }

            if(currentTabTracker.currentAnswer.classList.contains('faq_tab_controller')){
                if(back_tab){
                    back_tab.style.left = "0px";
                }
                
                tab1.classList.remove('faq_tab_out');
                tab1.classList.add('faq_tab_in');
    
                tab2.classList.remove('faq_tab_in');
                tab2.classList.add('faq_tab_out');
            }

            
        }
}


// Statements for handling tabs in faq section
const faqTabControllers = Array.from(document.querySelectorAll('.tab_container .faq_tab_controller'));

const faq_tab1 = document.querySelector('#faq_tab1');
const faq_tab2 = document.querySelector('#faq_tab2');

const faq_back_tab = document.querySelector('.tab_container .faq_tab_controller.back_tab');

const currentFaqTabControllersTracker = {
    currentAnswer : faqTabControllers[0],
}

faqTabControllers.forEach((tab)=>{
    tab.addEventListener('click', ()=>{
        switch_tab(tab, faq_tab1, faq_tab2, currentFaqTabControllersTracker,faq_back_tab)
    })
})

// statements to open/close faq

const faqs = Array.from(document.querySelectorAll('.faq_container .faq'));
const faqTabTracker = {
    currentFaqTab : null,
    prevFaqTab : null,
}
faqs.forEach((faq)=>{
    faq.addEventListener('click',()=>{
        faq.classList.add('active_faq');

        faqTabTracker.currentFaqTab = faq;

        if(faqTabTracker.currentFaqTab === faqTabTracker.prevFaqTab ){
            faq.classList.remove('active_faq');

            faqTabTracker.currentFaqTab = null;

            faqTabTracker.prevFaqTab = null;
            return;
        }

        if(faqTabTracker.prevFaqTab){
            faqTabTracker.prevFaqTab.classList.remove('active_faq');
        }

        
        faqTabTracker.prevFaqTab = faqTabTracker.currentFaqTab;
        return;
    })
})


// Statements for handling tabs in hero pricing tabs

const heroPricingTabControllers = Array.from(document.querySelectorAll('.tab_container .hero_price_tab_controller'));
const heroPriceBackTab = document.querySelector('.tab_container .hero_price_tab_controller.back_tab');

const priceTab1 = document.querySelector('#price_tab1');
const priceTab2 = document.querySelector('#price_tab2');

const currentHeroPriceTabControllersTracker = {
    currentAnswer : heroPricingTabControllers[0],
}

heroPricingTabControllers.forEach((tab)=>{
    tab.addEventListener('click', ()=>{
        switch_tab(tab, priceTab1, priceTab2, currentHeroPriceTabControllersTracker, heroPriceBackTab)
    })
})


// Statements for handling tabs in spectra plans tabs

const spectraPlansTabControllers = Array.from(document.querySelectorAll('.tab_container .spectra_plans_tab_controller'));

const plansTab1 = document.querySelector('#plans_tab1');
const plansTab2 = document.querySelector('#plans_tab2');

const currentSpectraPlansTabControllersTracker = {
    currentAnswer : spectraPlansTabControllers[0],
}

spectraPlansTabControllers.forEach((tab)=>{
    tab.addEventListener('click', ()=>{
        switch_tab(tab, plansTab1, plansTab2, currentSpectraPlansTabControllersTracker)
    })
})