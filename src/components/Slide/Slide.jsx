import React from 'react';
import { Conteiner } from './styles';
import Card from '../Cards/Costumers/Card';
import costumers from '../../data/costumers';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

function Slide() {
   const navigationPrevRef = React.useRef(null);
   const navigationNextRef = React.useRef(null);
  return (
    <Conteiner>
      <h2>What Says Our Customers</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween= {30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          }
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        loop={true}
        className="slide"
      >
        {costumers.map((costomer) => (
          <SwiperSlide key={costomer.id}>
            <Card item={costomer} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="buttons">
        <button className="btn" ref={navigationPrevRef}>
          <span>&#8249;</span>
        </button>
        <button className="btn" ref={navigationNextRef}>
          <span>&#8250;</span>
        </button>
      </div>
    </Conteiner>
  );
}

export default Slide