/********************************************************************************************************************************************/
/* ====== GET ELEMENTS FOR CAROUSEL EFFECT ====== */
const [imgs, timer] = [document.querySelectorAll('.image-container img'), 3000]

/* ==== auto carousel effect function ====== */
function carousel() {
    /* get active class */
    let activeClass = document.querySelector('.active')

    /* remove active class */
    activeClass.classList.remove('active')

    /* check if next element sibling is present, else return to first element */
    if (activeClass.nextElementSibling && activeClass.nextElementSibling.id !== 'business-title-container') {
        activeClass.nextElementSibling.classList.add('active')
    } else {
        imgs[0].classList.add('active');
    }

    /* call this function every 3s */
    setTimeout(() => {
        carousel();
    }, timer)
}
/* call carousel function */
carousel();