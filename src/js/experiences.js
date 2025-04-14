import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

export const initSwiper = () => {
  let gallerySwiper = null;

  const updateProgressBar = (swiper) => {
    const bars = document.querySelectorAll('.custom-pagination .bar');
    const totalSlides = swiper.slides.length - swiper.loopedSlides * 2;
    const progress = (swiper.realIndex + 1) / totalSlides;

    bars.forEach((bar, index) => {
      bar.classList.toggle('active', index === swiper.realIndex);
    });

    const activeBar = bars[swiper.realIndex];
    if (activeBar) {
      bars.forEach((bar) => {
        bar.style.transform = 'scaleX(0)';
      });
      activeBar.style.transform = 'scaleX(1)';
    }
  };

  const initGallerySwiper = () => {
    const isMobile = window.innerWidth < 1200;

    if (!gallerySwiper) {
      gallerySwiper = new Swiper('.swiper-gallery', {
        slidesPerView: isMobile ? 1.2 : 'auto',
        spaceBetween: isMobile ? 16 : 20,
        grabCursor: true,
        centeredSlides: isMobile,
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
        pagination: {
          el: '.swiper-pagination-gallery',
          type: 'bullets',
          clickable: true,
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
    } else {
      gallerySwiper.params.slidesPerView = isMobile ? 1.2 : 'auto';
      gallerySwiper.params.spaceBetween = isMobile ? 16 : 20;
      gallerySwiper.update();
    }
  };

  initGallerySwiper();
  window.addEventListener('resize', initGallerySwiper);
};
