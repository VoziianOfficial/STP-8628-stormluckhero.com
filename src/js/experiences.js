import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css/pagination";

export const experiences = () => {
  let experiencesSwiper = null;

  const initExperiencesSwiper = () => {
    if (window.innerWidth < 1200) {
      if (!experiencesSwiper) {
        experiencesSwiper = new Swiper(".swiper-gallery", {
          slidesPerView: 1,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          grabCursor: true,
          spaceBetween: 10,
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
            el: ".swiper-pagination-gallery",
            type: "progressbar",
            clickable: true,
          },
        });
      }
    } else {
      if (experiencesSwiper) {
        experiencesSwiper.destroy(true, true);
        experiencesSwiper = null;
      }
    }
  };

  initExperiencesSwiper();
  window.addEventListener("resize", initExperiencesSwiper);
};
