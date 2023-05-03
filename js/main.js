// Burger
const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')

let isMenuActive = false

// Disabling Scroll
const preventScroll = (e) => {
    e.preventDefault()
    e.stopPropagation()

    return false
}
burger.addEventListener('click', () => {
    isMenuActive = !isMenuActive
    burger.classList.toggle('header__burger-active')
    menu.classList.toggle('menu-active')
    if(isMenuActive) {
        body.addEventListener('wheel', preventScroll, {passive: false})
    } else body.removeEventListener('wheel', preventScroll)
})
