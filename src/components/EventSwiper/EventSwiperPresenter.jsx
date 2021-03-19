import React from 'react';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import EventItem from '../EventItem';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const EventSwiperPresenter = () => {
  return (
    <div>
      <Swiper slidesPerView={5} spaceBetween={10} navigation loop={true} autoplay={true} style={{ minWidth: 1700, maxWidth: 1900 }}>
        <SwiperSlide className="flex justify-center w-54">
          <EventItem
            img="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
            title="한눈에 보는 XYZ마트 축구화"
            subtitle="그라운드에 환경에 맞는 스터드를 확인하세요!"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center w-54">
          <EventItem
            img="https://images.unsplash.com/photo-1547692098-b139f1ea4cbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="한눈에 보는 트렌드, 매거진"
            subtitle="XYZ마트의 신상품&이슈상품 소식을 한눈에!"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center w-54">
          <EventItem
            img="https://images.unsplash.com/photo-1582213153939-613105f23a1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="리복 코트 시리즈 1"
            subtitle="다양한 스타일링 연출이 가능한 스니커즈!"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center w-54">
          <EventItem
            img="https://images.unsplash.com/photo-1511360154485-8bac04fbdf25?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
            title="VANS X PENN"
            subtitle="아이코닉한 테니스브랜드 PENN과 반스의 만남!"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center w-54">
          <EventItem
            img="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="우리 아이 봄 신상품"
            subtitle="XYZ마트 직원들이 추천하는 봄 신상품"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center w-54">
          <EventItem
            img="https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            title="출석체크 이벤트"
            subtitle="매일 출석체크하고 최대 1,000P 받자"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EventSwiperPresenter;
