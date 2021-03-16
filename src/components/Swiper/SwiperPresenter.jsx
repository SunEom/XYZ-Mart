import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const mySwiper = () => {
  return (
    <Swiper
      slidesPerView={3}
      navigation
      noSwiping={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
      autoplay={true}
      slideNextClass="swiper-slide-next w-40"
    >
      <SwiperSlide>
        <div>
          <img
            style={{ height: 400, width: 800 }}
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            style={{ height: 400, width: 800 }}
            src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            style={{ height: 400, width: 800 }}
            src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            style={{ height: 400, width: 800 }}
            src="https://images.unsplash.com/photo-1519225145634-74cad8193788?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            style={{ height: 400, width: 800 }}
            src="https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1363&q=80"
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default mySwiper;
