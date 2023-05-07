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


const appointmentModal = document.querySelector('.appointment-modal')
const appointmentConfirmButton = document.querySelector('.appointment-confirmation__confirm-button')
const appointmentCloseButton = document.querySelector('.appointment-modal__button-close')

async function sendAppointmentData(data) {
    return await fetch('/path', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }

appointmentConfirmButton.addEventListener('click', async (e) => {
    e.preventDefault()
    appointmentModal.classList.add('modal-opened')
    await sendAppointmentData()
})

appointmentCloseButton.addEventListener('click', () => {
    appointmentModal.classList.remove('modal-opened')
})