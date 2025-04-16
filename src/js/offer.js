import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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
    if (gallerySwiper) {
      gallerySwiper.destroy(true, true);
      gallerySwiper = null;
    }

    gallerySwiper = new Swiper('.swiper-gallery', {
      slidesPerView: 1.2,  // Изначально показываем 1.2 слайда
      spaceBetween: 16,    // Промежуток между слайдами
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
      pagination: false,   // Отключаем стандартную пагинацию
      navigation: {
        nextEl: '.swiper-button-next',  // Стрелка "вперед"
        prevEl: '.swiper-button-prev',  // Стрелка "назад"
      },
      breakpoints: {
        1200: {
          slidesPerView: 2.5,  // Показываем 2.5 слайда на экранах от 1200px
          spaceBetween: 0,    // Промежуток между слайдами
          centeredSlides: false,
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
