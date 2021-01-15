const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    // This is the trigger point for sliding
    // console.log(window.innerHeight / 5 * 4)

    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        // See MDN Web Documents
        // Element.getBoundingClientRect() provides a DOMRect Object providing
        // information about the size of an element and its position relative 
        // to the viewport.
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })

}
