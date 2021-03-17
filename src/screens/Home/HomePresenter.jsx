import React from 'react';
import MainSwiper from '../../components/MainSwiper';
import NewArrials from '../../components/NewArrivals';
import EventSwiper from '../../components/EventSwiper';
const HomePresenter = () => {
  return (
    <div style={{ width: 1700 }}>
      <div className="px-40">
        <MainSwiper></MainSwiper>
      </div>
      <div className="w-full px-40">
        <NewArrials></NewArrials>
      </div>
      <div className="w-full mt-20">
        <EventSwiper></EventSwiper>
      </div>
    </div>
  );
};

export default HomePresenter;
