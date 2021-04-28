/********************************************************************************************************************************************/
/* ====== EFFECTS THAT DEALS WITH INTERSECTION OBSERVER====== */
/********************************************************************************************************************************************/
/* ====== GET ELEMENTS FOR CHANGING NAV STYLE ON SCROLL====== */

const nav = document.querySelector('header')
const nameIntro = document.querySelector('.image-container')
const options = {
    root: null,
    threshold: 0,
    rootMargin: "-50px 0px 0px 0px"
};

const nameIntroObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.remove('nav-scrolled')
        } else {
            nav.classList.add('nav-scrolled')
        }
    })
}, options)
nameIntroObserver.observe(nameIntro);

/* ====== GET ELEMENTS FOR SLIDE IN EFFECT HORIZONTALLY====== */
const sliders = document.querySelectorAll('.slide-in');

const slideOptions = {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
};

const slideOnScroll = new IntersectionObserver((entries, slideOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('appear')
        slideOnScroll.unobserve(entry.target)
    })
}, slideOptions)

sliders.forEach(slide => {
    slideOnScroll.observe(slide)
})