const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 2500,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
})