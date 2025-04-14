import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

export const initSwiper = () => {
  let gallerySwiper = null;

  // Функция для обновления прогресс-бара
  const updateProgressBar = (swiper) => {
    const bars = document.querySelectorAll('.custom-pagination .bar');
    const totalBars = bars.length;
    const activeBarIndex = Math.floor(swiper.realIndex / (swiper.slides.length / totalBars));

    bars.forEach((bar, index) => {
      bar.classList.toggle('active', index === activeBarIndex);
    });
  };


  // Инициализация кастомного Swiper с прогресс-баром
  const swiper = new Swiper('.swiper-gallery', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
    freeMode: true,
    on: {
      init(swiper) {
        updateProgressBar(swiper);
      },
      slideChange(swiper) {
        updateProgressBar(swiper);
      },
    },
  });

  // Инициализация галереи Swiper для маленьких экранов
  const initGallerySwiper = () => {
    if (window.innerWidth < 1200) {
      if (!gallerySwiper) {
        gallerySwiper = new Swiper('.swiper-gallery', {
          slidesPerView: 1.2,
          centeredSlides: false,
          loop: false,
          grabCursor: true,
          spaceBetween: 16,
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
        });
      }
    } else {
      if (gallerySwiper) {
        gallerySwiper.destroy(true, true);
        gallerySwiper = null;
      }
    }
  };


  initGallerySwiper();
  window.addEventListener('resize', initGallerySwiper);
};
