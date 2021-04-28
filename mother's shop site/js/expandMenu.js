/********************************************************************************************************************************************/
/* ====== GET ELEMENTS FOR MENU EXPAND====== */
const [menuExpCont, menuExpBtn, menuExpBtnClose, links, referenceLink] = [document.querySelector('.expand-menu-container'), document.querySelector('#btn-menu-expand'), document.querySelector('#btn-menu-close'), document.querySelectorAll('.link a'), document.querySelectorAll('.reference-link')];
let expanded = false;

/* event delegation */
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}

/* event to expand and collapse the menu */

/* to expand */
menuExpBtn.addEventListener('click', e => {
    if (expanded === false) {
        expanded = true;
        menuExpBtn.setAttribute('aria-expanded', expanded)
    }
    menuExpCont.classList.add('expanded')

})

/* to collapse */
menuExpBtnClose.addEventListener('click', e => {

    if (expanded === true) {
        expanded = false;
        menuExpBtn.setAttribute('aria-expanded', expanded)
    }
    menuExpCont.classList.remove('expanded')
})

/* menu will also collapse when any of the buttons are clicked */
addGlobalEventListener('click', '.link a', e => {
    let linkIndex, miliSec = 2000;
    const clearLinkHighlight = (i) => {
        referenceLink[i].classList.remove('selected-link-highlight')
    }

    switch (e.target) {
        case links[0]:
            linkIndex = 0;
            break;
        case links[1]:
            linkIndex = 1;
            break;
        case links[2]:
            linkIndex = 2;
            break;
        default:
            return;

    }

    referenceLink[linkIndex].classList.add('selected-link-highlight')
    setTimeout(clearLinkHighlight, miliSec, linkIndex);

    expanded = false;
    menuExpBtn.setAttribute('aria-expanded', expanded)
    menuExpCont.classList.remove('expanded')
})