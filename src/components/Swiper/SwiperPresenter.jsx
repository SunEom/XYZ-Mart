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
    <div className="px-60 w-full flex justify-center" style={{ minWidth: 1250 }}>
      <Swiper
        slidesPerView={1}
        navigation
        noSwiping={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
        style={{ minWidth: 1250 }}
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              style={{ height: 560, width: 1100, minWidth: 1100 }}
              src="https://images.unsplash.com/photo-1566958799193-c2aa57a835d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&crop=faces,focalpoint&fit=crop&w=1000&h=650&q=75"
              alt=""
            />
            <div className="absolute top-40 left-36">
              <div className="bg-red-600 font-bold w-32 text-center text-white px-2 py-1">PROMOTION</div>
              <div>
                <div className="text-5xl font-bold my-5">XYZ-MART</div>
                <div className="text-4xl font-bold">단독상품</div>
              </div>
              <div className="mt-8 font-semibold">
                <div>XYZ마트 단독상품 & 멀티샵 단독상품을</div>
                <div>지금 만나보세요!</div>
              </div>
            </div>
            <div className="absolute bottom-0 right-16 h-16 w-1/3 bg-white bg-opacity-80 text-base font-bold flex justify-center items-center">
              1. XYZ 마트 단독상품
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              style={{ height: 560, width: 1100, minWidth: 1100 }}
              src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&crop=faces,focalpoint&fit=crop&w=1000&h=650&q=75"
              alt=""
            />
            <div className="absolute top-40 left-32">
              <div className="bg-yellow-800 font-bold w-32 text-center text-white px-2 py-1">CONVERSE</div>
              <div>
                <div className="text-5xl font-bold mt-5 mb-3">TREND</div>
                <div className="text-5xl font-bold">SNEAKERS</div>
              </div>
              <div className="mt-8 font-semibold">
                <div>유행을 타지 않는 트렌디한 디자인,</div>
                <div>다양한 스타일링으로 연출 가능한 컨버스</div>
              </div>
            </div>
            <div className="absolute bottom-0 right-16 h-16 w-1/3 bg-white bg-opacity-80 text-base font-bold flex justify-center items-center">
              2. 스니커즈 특별전
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              style={{ height: 560, width: 1100, minWidth: 1100 }}
              src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&crop=faces,focalpoint&fit=crop&w=1000&h=650&q=75"
              alt=""
            />
            <div className="absolute top-40 left-36 text-white">
              <div className="w-24 bg-gray-500 text-white text-center text-sm px-2 py-1 uppercase font-bold">hawkins</div>
              <div>
                <div className="text-6xl font-bold my-5 uppercase">men's</div>
                <div className="text-4xl font-bold uppercase">dreess shoes</div>
              </div>
              <div className="mt-8 font-semibold">
                <div>모든 시간, 모든 날 항상 함께하는 호킨스</div>
                <div>캐주얼룩부터 비즈니스룩까지 모두 잘 어울리는 드레스 슈즈</div>
              </div>
            </div>
            <div className="absolute bottom-0 right-16 h-16 w-1/3 bg-white bg-opacity-80 text-base font-bold flex justify-center items-center">
              3. 남성 드레스 슈즈 컬렉션
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              style={{ height: 560, width: 1100, minWidth: 1100 }}
              src="https://images.unsplash.com/photo-1519225145634-74cad8193788?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&crop=faces,focalpoint&fit=crop&w=1000&h=650&q=75"
              alt=""
            />
            <div className="absolute top-40 left-36">
              <div className="bg-yellow-600 font-bold w-32 text-center text-white px-2 py-1">PROMOTION</div>
              <div>
                <div className="text-6xl font-bold my-5 uppercase">spring</div>
                <div className="text-4xl font-bold">쇼핑 리스트</div>
              </div>
              <div className="mt-8 font-semibold">
                <div>새 봄 맞이 가벼워진 옷차림에 어울리는 트랜드 슈즈</div>
                <div>#캐주얼슈즈 #커플슈즈 #데일리슈즈</div>
              </div>
            </div>
            <div className="absolute bottom-0 right-16 h-16 w-1/3 bg-white bg-opacity-80 text-base font-bold flex justify-center items-center">
              4. 봄 맞이 쇼핑 리스트
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              style={{ height: 560, width: 1100, minWidth: 1100 }}
              src="https://images.unsplash.com/photo-1584564515943-b54cbb61836b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&h=650&q=75"
              alt=""
            />
            <div className="absolute top-40 left-36">
              <div className="bg-yellow-500 w-36 text-white text-center text-sm px-2 py-1 uppercase font-bold">only xyz-mart</div>
              <div>
                <div className="text-5xl font-bold my-5 uppercase">xyz마트 키즈</div>
                <div className="text-4xl font-bold">단독 상품</div>
              </div>
              <div className="mt-8 font-semibold">
                <div>XYZ마트에서만 만날 수 있는 특별한 상품을</div>
                <div>우리 아이에게 선물해보세요!</div>
              </div>
            </div>
            <div className="absolute bottom-0 right-16 h-16 w-1/3 bg-white bg-opacity-80 text-base font-bold flex justify-center items-center">
              5. XYZ 마트 키즈 단독상품
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default mySwiper;
