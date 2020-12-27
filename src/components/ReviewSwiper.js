// import Swiper core and required components
import SwiperCore, { Pagination, A11y, Autoplay, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
// import "swiper/components/autoplay/autoplay.scss";
import "swiper/components/effect-fade/effect-fade.scss";

// install Swiper components
SwiperCore.use([Pagination, A11y, Autoplay, EffectFade]);

const ReviewSwiper = (props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {}}
      className="pb-5"
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={700}
    >
      {props.reviews.map((review) => (
        <SwiperSlide key={review.id}>{review.content}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSwiper;
