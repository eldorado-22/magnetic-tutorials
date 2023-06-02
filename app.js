let box = document.querySelector(".box");
let blue = document.querySelector(".blue");


box.addEventListener("mousemove", (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let BoxWidth = box.clientWidth
    let BoxHeight = box.clientHeight
    let moveX = (x - BoxWidth/2)
    let moveY = (y - BoxHeight/2)
    box.style.transform = `translateX(${moveX}px) 
    translateY(${moveY}px)`
})
box.addEventListener("mouseout", (e) => {
    box.style.transform = ``
})
blue.addEventListener("mousemove", (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let BoxWidth = blue.clientWidth
    let BoxHeight = blue.clientHeight
    let moveX = (x - BoxWidth/2)
    let moveY = (y - BoxHeight/2)
    blue.style.transform = `translateX(${moveX}px) 
    translateY(${moveY}px)`
})
blue.addEventListener("mouseout", (e) => {
    box.style.transform = ``
})