/********************************************************************************************************************************************/
/* ====== GET ELEMENTS FOR DRAGGABLE SLIDER EFFECT ====== */
const [slider, innerSlider] = [document.querySelectorAll('.household'), document.querySelectorAll('.draggable-imgs')]

let pressed = false,
    startX, x;
window.addEventListener('mouseup', () => {
    pressed = false;
})

window.addEventListener('pointerup', () => {
    pressed = false;
})

for (let i = 0; i < slider.length; i++) {

    if (window.PointerEvent) {
        /* touch event for mobile */
        slider[i].addEventListener('pointerdown', getXIfPressed, true)
        slider[i].addEventListener('pointerenter', grabCursor);
        slider[i].addEventListener('pointerup', grabCursor);
        slider[i].addEventListener('pointermove', dragging, true)

    } else {
        slider[i].addEventListener('mousedown', getXIfPressed);
        slider[i].addEventListener('mouseenter', grabCursor)
        slider[i].addEventListener('mouseup', grabCursor)
        slider[i].addEventListener('mousemove', dragging)
    }
    // functions for their respective event
    function getXIfPressed(e) {
        e.preventDefault();
        pressed = true;
        startX = e.offsetX - innerSlider[i].offsetLeft;
        slider[i].style.cursor = 'grabbing'
    }

    function grabCursor() {
        slider[i].style.cursor = 'grab';
    }

    function dragging(e) {
        e.preventDefault();

        if (!pressed) return;

        x = e.offsetX;
        innerSlider[i].style.left = `${x - startX}px`;

        boundary(i);
    }

}
// check boundary
function boundary(i) {
    let inner = innerSlider[i].getBoundingClientRect()
    let outer = slider[i].getBoundingClientRect()

    if (parseInt(innerSlider[i].style.left) > 0) {
        innerSlider[i].style.left = '0px'
    }
    if (inner.right < outer.right) {
        innerSlider[i].style.left = `-${inner.width - outer.width}px`
    }
}