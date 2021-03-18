// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Link } from 'react-router-dom';

import Item from '../Item';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const NewArrivalsSwiper = () => {
  return (
    <div className="pt-24 mr-0" style={{ width: 1600 }}>
      <div className="relative">
        <div className="uppercase text-center text-3xl font-bold pb-10">new arrivals</div>
        <Link to="/newarrival" className="absolute right-14 top-3 text-lg font-bold flex items-center">
          more
          <i className="fas fa-chevron-right fa-sm pl-1 relative top-1"></i>
        </Link>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          style={{ paddingLeft: 50, paddingRight: 50 }}
          className="flex justify-center"
        >
          <SwiperSlide>
            <Item
              id={1}
              img="https://images.unsplash.com/photo-1488931352846-7ccb8b2225b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&w=216&h=216&q=80"
              company="나이키"
              serial="sply-350"
              cost="139,000"
              isNew={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              id={2}
              img="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&w=216&h=216&q=80"
              company="나이키"
              serial="air-3029"
              cost="97,000"
              isNew={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              id={3}
              img="https://images.unsplash.com/photo-1555378322-a8e1515568e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&w=216&h=216&q=80"
              company="P.F. flyers"
              serial="pf-1232"
              cost="76,000"
              isNew={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              id={4}
              img="https://images.unsplash.com/photo-1520256862855-398228c41684?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&crop=focalpoint&w=216&h=216&q=80"
              company="아디다스"
              serial="adi-s029"
              cost="144,000"
              isNew={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              id={5}
              img="https://images.unsplash.com/photo-1554192833-605c183c9f45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&w=216&h=216&q=80"
              company="Converse"
              serial="con-c123"
              cost="79,000"
              isNew={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              id={6}
              img="https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&crop=focalpoint&w=216&h=216&q=80"
              company="Converse"
              serial="ccom-g12"
              cost="123,000"
              isNew={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              id={7}
              img="https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&w=216&h=216&q=80"
              company="Vans"
              serial="van-0293"
              cost="45,000"
              isNew={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Item
              id={8}
              img="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&crop=focalpoint&w=216&h=216&q=80"
              company="뉴발란스"
              serial="new-b901"
              cost="79,000"
              isNew={true}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivalsSwiper;
