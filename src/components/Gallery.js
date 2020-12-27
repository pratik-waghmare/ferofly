// import Swiper core and required components
import SwiperCore, { Pagination, A11y, Autoplay, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

// install Swiper components
SwiperCore.use([Pagination, A11y, Autoplay, EffectFade]);

const GallerySwiper = (props) => {
  return (
    <Swiper
      spaceBetween={4}
      slidesPerView={3}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {}}
      className="pb-5 flex__center"
      style={{ height: "70vh", width: "100vw", maxWidth: "1000px" }}
      autoplay={{ delay: 4000, disableOnInteraction: true }}
      //   effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1500}
    >
      {props.images.map((element) => (
        <SwiperSlide key={element.id}>
          <img src={element.image} alt={element.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Gallery = (props) => {
  return (
    <div className="gallery flex__center">
      <div className="gallery__heading">
        <h5 className="card-title h5 mb-5">{props.title}</h5>
      </div>
      <div className="gallery__body" style={{ width: "100vw" }} s>
        <GallerySwiper images={props.images} />
      </div>
    </div>
  );
};

export default Gallery;
