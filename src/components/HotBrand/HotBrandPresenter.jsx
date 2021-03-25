import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MItem from '../../components/MItem';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const HotBrandPresenter = ({ bgImgList, nikeShoes, vansShoes, newBalanceShoes }) => {
  const [bgIndex, setBgIndex] = useState(-1);

  return (
    <div className="w-full">
      <div className="uppercase text-center pt-24 pb-10 text-3xl font-bold">Hot Brand</div>
      <div className="relative">
        <div className="relative">
          <img className="w-full" src={bgImgList[bgIndex]?.src} style={{ height: 360 }} alt="" />
          <div className="absolute top-0 w-full bg-black bg-opacity-40 " style={{ height: 360 }}>
            <div className="w-full text-white text-center pt-20 text-4xl font-bold">
              <Link to={`/product/brand/${bgImgList[bgIndex]?.com}`.toLowerCase()}>{bgImgList[bgIndex]?.com}</Link>
            </div>
          </div>
        </div>

        <div className="w-full px-24 absolute top-52 z-10">
          <Swiper
            slidesPerView={1}
            navigation
            onSlidePrevTransitionStart={() => setBgIndex((current) => (current - 1 + bgImgList.length) % bgImgList.length)}
            onSlideNextTransitionStart={() => setBgIndex((current) => (current + 1) % bgImgList.length)}
            style={{ paddingLeft: 20, paddingRight: 20, width: 1500 }}
            autoplay={true}
            loop={true}
          >
            {/* Nike */}
            <SwiperSlide className="w-full">
              <div className="flex justify-between w-full">
                {nikeShoes.map((n) => (
                  <div style={{ width: 285 }} className="flex justify-center mx-auto" key={n.id}>
                    <MItem {...n} img={`${n.img}&w=285&h=285&q=80`} />
                  </div>
                ))}
              </div>
            </SwiperSlide>

            {/* Vans */}
            <SwiperSlide className="w-full">
              <div className="flex justify-between w-full">
                <div className="flex justify-between w-full">
                  {vansShoes.map((n) => (
                    <div style={{ width: 285 }} className="flex justify-center mx-auto" key={n.id}>
                      <MItem {...n} img={`${n.img}&w=285&h=285&q=80`} />
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>

            {/* New Balance */}
            <SwiperSlide className="w-full">
              <div className="flex justify-between w-full">
                <div className="flex justify-between w-full">
                  {newBalanceShoes.map((n) => (
                    <div style={{ width: 285 }} className="flex justify-center mx-auto" key={n.id}>
                      <MItem {...n} img={`${n.img}&w=285&h=285&q=80`} />
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HotBrandPresenter;
