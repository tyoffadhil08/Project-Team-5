var swiper = new Swiper('.home-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'coverflow', // Gunakan efek 'coverflow' untuk mendapatkan tampilan kartu
    coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 900,
        modifier: 1,
        slideShadows: false,
    },
    speed: 500,
});

var swiper = new Swiper('.featured-slider', {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 900,
        modifier: 1,
        slideShadows: false,
    },
    slidesPerView: 'auto', // Menggunakan 'auto' agar tidak terlalu banyak slide yang terlihat
    preventInteractionOnTransition: true, // Menghentikan interaksi pengguna selama transisi slide
    on: {
        slideChange: function () {
            // Memeriksa apakah sudah mencapai slide terakhir
            if (swiper.isEnd) {
                // Kembali ke slide pertama setelah mencapai ujung
                swiper.slideTo(0, 0);
            }
        },
    },
});


