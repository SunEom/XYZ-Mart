import React, { useState } from 'react';
import MItem from '../../components/MItem';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const HotBrandPresenter = ({ bgImgList }) => {
  const [bgIndex, setBgIndex] = useState(0);
  console.log(bgImgList);

  return (
    <div className="w-full">
      <div className="uppercase text-center pt-24 pb-10 text-3xl font-bold">Hot Brand</div>
      <div className="relative">
        <div className="relative">
          <img className="w-full" src={bgImgList[bgIndex].src} style={{ height: 360 }} alt="" />
          <div className="absolute top-0 w-full bg-black bg-opacity-40 " style={{ height: 360 }}>
            <div className="w-full text-white text-center pt-20 text-4xl font-bold">{bgImgList[bgIndex].com}</div>
          </div>
        </div>

        <div className="w-full px-24 absolute top-52 z-10">
          <Swiper
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            prev
            onSlidePrevTransitionStart={() => setBgIndex((current) => current - 1)}
            onSlideNextTransitionStart={() => setBgIndex((current) => current + 1)}
            style={{ paddingLeft: 20, paddingRight: 20 }}
          >
            {/* Nike */}
            <SwiperSlide className="w-full">
              <div className="flex justify-between w-full">
                <div style={{ width: 285 }} className="flex justify-center mx-auto">
                  <MItem
                    id={1}
                    img="https://images.unsplash.com/photo-1488931352846-7ccb8b2225b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&w=285&h=285&q=80"
                    company="나이키"
                    serial="sply-350"
                    cost="139,000"
                  />
                </div>
                <div style={{ width: 285 }} className="flex justify-center mx-auto">
                  <MItem
                    id={2}
                    img="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&w=285&h=285&q=80"
                    company="나이키"
                    serial="air-3029"
                    cost="97,000"
                  />
                </div>
                <div style={{ width: 285 }} className="flex justify-center mx-auto">
                  <MItem
                    id={1}
                    img="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=285&h=285&q=80"
                    company="나이키"
                    serial="sply-350"
                    cost="139,000"
                  />
                </div>
                <div style={{ width: 285 }} className="flex justify-center mx-auto">
                  <MItem
                    id={1}
                    img="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
                    company="나이키"
                    serial="sply-350"
                    cost="139,000"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* Vans */}
            <SwiperSlide className="w-full">
              <div className="flex justify-between w-full">
                <div style={{ width: 285 }} className="flex justify-center mx-auto">
                  <MItem
                    id={1}
                    img="https://images.unsplash.com/photo-1608953611973-7b7a921c8fd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=285&h=285&q=80"
                    company="VANS"
                    serial="sply-350"
                    cost="139,000"
                  />
                </div>
                <div style={{ width: 285 }} className="flex justify-center mx-auto">
                  <MItem
                    id={2}
                    img="https://images.unsplash.com/photo-1566236485911-3bd1f07f9f7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
                    company="VANS"
                    serial="air-3029"
                    cost="97,000"
                  />
                </div>
                <div style={{ width: 285 }} className="flex justify-center mx-auto">
                  <MItem
                    id={1}
                    img="https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
                    company="VANS"
                    serial="sply-350"
                    cost="139,000"
                  />
                </div>
                <div style={{ width: 285 }} className="flex justify-center mx-auto">
                  <MItem
                    id={1}
                    img="https://images.unsplash.com/photo-1542272605-15bd6a2bd4f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=285&h=285&q=80"
                    company="VANS"
                    serial="sply-350"
                    cost="139,000"
                  />
                </div>
              </div>
            </SwiperSlide>

            {/* New Balance */}
            <SwiperSlide className="w-full">
              <div className="flex justify-between w-full">
                <div style={{ width: 285 }} className="flex justify-center mx-auto">
                  <MItem
                    id={1}
                    img="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=285&h=285&q=80"
                    company="New Balance"
                    serial="sply-350"
                    cost="139,000"
                  />
                </div>
                <div style={{ width: 285 }} className="flex justify-center mx-auto">
                  <MItem
                    id={2}
                    img="https://images.unsplash.com/photo-1602487790202-27a673875ef7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=285&h=285&q=80"
                    company="New Balance"
                    serial="air-3029"
                    cost="97,000"
                  />
                </div>
                <div style={{ width: 285 }} className="flex justify-center mx-auto">
                  <MItem
                    id={1}
                    img="https://images.unsplash.com/photo-1542272604-78d13c1f741a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
                    company="New Balance"
                    serial="sply-350"
                    cost="139,000"
                  />
                </div>
                <div style={{ width: 285 }} className="flex justify-center mx-auto">
                  <MItem
                    id={1}
                    img="https://images.unsplash.com/photo-1602487807128-bebcccbf18b9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
                    company="New Balance"
                    serial="sply-350"
                    cost="139,000"
                  />
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
