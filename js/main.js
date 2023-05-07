// Burger
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')

let isMenuActive = false
burger.addEventListener('click', () => {
    isMenuActive = !isMenuActive
    burger.classList.toggle('header__burger-active')
    menu.classList.toggle('menu-active')
    body.classList.toggle('menu-is-active')
})