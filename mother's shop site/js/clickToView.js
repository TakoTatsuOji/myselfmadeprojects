/* ========================== "click to view" function using event delegtion ============================ */
const [displayImg, clickToViewLinks, displayImgCloseBtn] = [document.querySelector('.display-img-container'), document.querySelectorAll('.click-to-view'), document.querySelector('#display-img-close')]
let current = document.querySelectorAll('.display-img')


// addGlobalEventListener('dblclick', '.draggable-imgs img', e => {
//     current.src = e.target.src;
//     displayImg.classList.add('displayed');
// })


addGlobalEventListener('click', '.click-to-view', e => {
    let expandLinkIndex;

    switch (e.target) {
        case clickToViewLinks[0]:
            expandLinkIndex = 0
            break;
        case clickToViewLinks[1]:
            expandLinkIndex = 1
            break;
        case clickToViewLinks[2]:
            expandLinkIndex = 2
            break;
        case clickToViewLinks[3]:
            expandLinkIndex = 3
            break;
        case clickToViewLinks[4]:
            expandLinkIndex = 4
            break;
        case clickToViewLinks[5]:
            expandLinkIndex = 5
            break;
    }
    displaySelectedSectionImg(expandLinkIndex);
})

function displaySelectedSectionImg(linkIndex) {
    let imgChildren = innerSlider[linkIndex].children;

    for (let i = 0; i < imgChildren.length; i++) {
        current[i].src = imgChildren[i].src
    }
    displayImg.classList.add('displayed');
}

function removeDisplayedClass() {
    displayImg.classList.remove('displayed');
}

displayImgCloseBtn.addEventListener('click', removeDisplayedClass);

/* ========================== carousel inside display-img ============================ */
const [prev, next] = [document.querySelector('#prev'), document.querySelector('#next')]

function previousSlide() {
    let activeDisplay = document.querySelector('.active-display');

    activeDisplay.classList.remove('active-display');

    if (activeDisplay.previousElementSibling && activeDisplay.previousElementSibling.id !== 'display-img-header') {
        activeDisplay.previousElementSibling.classList.add('active-display')
    } else {
        current[current.length - 1].classList.add('active-display')
    }
}

function nextSlide() {
    let activeDisplay = document.querySelector('.active-display');

    activeDisplay.classList.remove('active-display');

    if (activeDisplay.nextElementSibling && activeDisplay.nextElementSibling.id !== 'prev') {
        activeDisplay.nextElementSibling.classList.add('active-display')
    } else {
        current[0].classList.add('active-display')
    }
}

prev.addEventListener('click', previousSlide);
next.addEventListener('click', nextSlide)