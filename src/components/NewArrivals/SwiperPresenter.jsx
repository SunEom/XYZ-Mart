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

const NewArrivalsSwiper = ({ newShoes }) => {
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
          style={{ paddingLeft: 50, paddingRight: 50 }}
          className="flex justify-center"
        >
          {newShoes.map((s) => (
            <SwiperSlide key={s.id}>
              <Item {...s} img={`${s.img}&w=216&h=216&q=80`} isNew={true} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivalsSwiper;
