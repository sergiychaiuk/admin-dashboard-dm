const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")

menuBtn.addEventListener('click', () => {
    // sideMenu.style.display = 'block'
    sideMenu.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    // sideMenu.style.display = 'none'
    sideMenu.classList.remove('active')
})