const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggler = document.querySelector(".theme-toggler")

menuBtn.addEventListener('click', () => {
    // sideMenu.style.display = 'block'
    sideMenu.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    // sideMenu.style.display = 'none'
    sideMenu.classList.remove('active')
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelectorAll('span').forEach((e) => e.classList.toggle('active'))
})