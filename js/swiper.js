const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: "auto",
    loop: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
});
