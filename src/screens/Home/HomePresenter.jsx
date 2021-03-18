import React from 'react';
import MainSwiper from '../../components/MainSwiper';
import NewArrials from '../../components/NewArrivals';
import EventSwiper from '../../components/EventSwiper';
import HotBrand from '../../components/HotBrand';
const HomePresenter = () => {
  return (
    <div style={{ minWidth: 1700 }}>
      <div className="px-40">
        <MainSwiper></MainSwiper>
      </div>
      <div className="w-full px-40">
        <NewArrials></NewArrials>
      </div>
      <div className="w-full mt-20">
        <EventSwiper></EventSwiper>
      </div>
      <div style={{ height: 900 }} className="w-full">
        <HotBrand />
      </div>
    </div>
  );
};

export default HomePresenter;
