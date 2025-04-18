import Swiper from 'swiper/bundle';


export const initSwiper = () => {
  let gallerySwiper = null;

  const updateProgressBar = (swiper) => {
    const bars = document.querySelectorAll('.custom-pagination .bar');
    const totalSlides = swiper.slides.length - swiper.loopedSlides * 2;
    const progress = (swiper.realIndex + 1) / totalSlides;

    bars.forEach((bar, index) => {
      bar.classList.toggle('active', index === swiper.realIndex);
    });

    bars.forEach((bar) => {
      bar.style.transform = 'scaleX(0)';
    });

    const activeBar = bars[swiper.realIndex];
    if (activeBar) {
      activeBar.style.transform = 'scaleX(1)';
    }
  };

  const initGallerySwiper = () => {
    if (gallerySwiper) {
      gallerySwiper.destroy(true, true);
      gallerySwiper = null;
    }

    gallerySwiper = new Swiper('.swiper-gallery', {
      slidesPerView: 1.2,
      spaceBetween: 13,
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      speed: 800,
      simulateTouch: true,
      touchRatio: 1,
      mousewheel: {
        sensitivity: 0.5,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      pagination: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1440: {
          slidesPerView: 2.5,
          spaceBetween: 20,
          centeredSlides: true,
        },
      },
      on: {
        init(swiper) {
          updateProgressBar(swiper);
        },
        slideChange(swiper) {
          updateProgressBar(swiper);
        },
      },
    });

  };

  initGallerySwiper();
  window.addEventListener('resize', initGallerySwiper);
};
