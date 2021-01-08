const panels = document.querySelectorAll(".panel")

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
    
    // style = panel.currentStyle || window.getComputedStyle(panel, false)
    // bi = style.backgroundImage.slice(4, -1);
    // console.log(style.backgroundImage.slice(4, -1))
    // console.log(panel.offsetHeight)
    // console.log(panel.offsetWidth)

    // document.getElementById("main").style.backgroundSize = "100px 100px";
    // var w = window.innerWidth;
    // var h = window.innerHeight;
})


function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}







