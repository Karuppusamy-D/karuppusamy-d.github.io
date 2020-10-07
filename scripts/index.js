var mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: -50,
        slideShadows: false,
    },

    autoplay: {
        delay: 5000,
    },

    keyboard: {
        enabled: true
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});