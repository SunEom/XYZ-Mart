import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DetailPresenter = () => {
  const [cost, setCost] = useState(0);
  const addCost = () => setCost((current) => current + 48000);
  return (
    <div style={{ minWidth: 1700 }} className="flex justify-center">
      <div>
        <div className="flex items-center font-bold h-14 text-gray-500 mb-5 mt-2">
          <Link to="/">
            <i className="fas fa-home mr-2"></i>Home
          </Link>
          <div className="mx-2 relative" style={{ top: 2 }}>
            <i className="fas fa-chevron-right"></i>
          </div>
          <Link to="/shoes/all">신발</Link>
          <div className="mx-2 relative" style={{ top: 2 }}>
            <i className="fas fa-chevron-right"></i>
          </div>
          <Link to="/shoes/sneakers">스니커즈</Link>
        </div>
        <div className="flex">
          <div>
            <img
              src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&h=580&q=80"
              alt=""
            />
            <div className="mt-8 border-t-2 border-b border-solid flex items-center">
              <div style={{ width: 290 }} className="text-center py-8">
                <div className="font-bold text-gray-500">상품만족도</div>
                <div className="text-3xl font-extrabold pt-1">95%</div>
                <div className="font-extrabold pt-1">★★★★★ 5</div>
              </div>
              <div
                style={{ width: 290, height: 60 }}
                className="text-center flex flex-col justify-center items-center border-l border-gray-300 border-solid"
              >
                <div className="flex">
                  <div className="w-20 text-left text-sm text-gray-400 font-bold">사이즈</div>
                  <div className="text-sm font-bold">정 사이즈에요</div>
                </div>
                <div className="flex">
                  <div className="w-20 text-left text-sm text-gray-400 font-bold">색상</div>
                  <div className="text-sm font-bold">화면과 같아요</div>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-10" style={{ width: 580 }}>
            <div className="flex justify-between">
              <div className="flex">
                <div className="bg-mainRed px-2 text-white font-bold text-base mr-2 flex items-center h-7">XYZ-MART</div>
                <div className="font-bold border-b border-solid relative -top-2">
                  <Link to="/shoes/newbalance" className="relative top-2">
                    뉴발란스 <i className="fas fa-chevron-right"></i>
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-5">
                  <i className="fas fa-store-alt"></i> <span className="text-sm font-bold">매장픽업 가능</span>
                </div>
                <div>
                  <i className="far fa-heart fa-2x"></i>
                </div>
              </div>
            </div>

            <div className="border-b-2 border-solid py-5">
              <div className="text-3xl font-bold">클럽 씨 리벤지</div>
              <div className="uppercase text-gray-500 py-2">club c revenge</div>
              <div className="flex text-sm text-gray-500">
                <div className=" border-r border-solid pr-3 mr-3">스타일코드 : RASDFSBZ</div>
                <div>상품코드 : R123123Z</div>
              </div>
              <div className="pt-5 text-mainRed">
                <div className="inline line-through text-gray-600 text-lg">89,000원</div>
                <div className="inline ml-3">
                  <span className="text-3xl font-bold">48,000</span>원[50%]
                </div>
              </div>
            </div>

            <div style={{ height: 95 }} className="flex items-center border-b border-gray-400 border-solid">
              <div style={{ width: 200 }} className="ml-4 text-sm font-bold">
                스타일 컬러
              </div>
              <div className="flex">
                <Link to="/1" className="mr-2">
                  <img
                    alt=""
                    style={{ height: 50 }}
                    src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&h=580&q=80"
                  />
                </Link>
                <Link to="/1" className="mr-2">
                  <img
                    alt=""
                    style={{ height: 50 }}
                    src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&h=580&q=80"
                  />
                </Link>
                <Link to="/1" className="mr-2">
                  <img
                    alt=""
                    style={{ height: 50 }}
                    src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&h=580&q=80"
                  />
                </Link>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <div style={{ width: 200 }} className="ml-4 font-bold h-20 flex items-end">
                  통합맴버십 혜택
                </div>
                <div className="flex font-bold items-end h-20">
                  맴버십 회원 가입 시 <span className="text-mainRed text-lg"> 5,000</span>P 즉시 적립
                </div>
              </div>
              <div className="flex items-center mt-8">
                <div style={{ width: 200 }} className="ml-4 font-bold">
                  카드혜택
                </div>
                <div className="flex font-bold items-center">
                  <div>무이자 할부</div>
                  <div className="font-normal text-sm ml-4 text-red-600 underline"> 혜택보기 ></div>
                </div>
              </div>
              <div className="flex items-center pt-6">
                <div style={{ width: 200 }} className="ml-4 font-bold">
                  색상 코드
                </div>
                <div className="flex text-sm uppercase">pocel/utigrn/vecnav</div>
              </div>
              <div className="flex items-center pt-8 pb-4">
                <div style={{ width: 200 }} className="ml-4 font-bold relative -top-7">
                  배송 방법
                </div>
                <div className="flex text-sm uppercase flex-col ">
                  <div className="text-base mb-3">
                    <input type="radio" id="nomal" name="drone" value="nomal" checked className="mr-2" />
                    <label for="nomal">일반배송 (무료배송)</label>
                  </div>

                  <div className="text-base">
                    <input type="radio" id="ati" name="drone" value="ati" className="mr-2" />
                    <label for="ati">
                      아트배송<div className="text-sm text-gray-400">(배송비 3,500원)</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center pt-6 border-b border-solid pb-7">
                <div style={{ width: 200 }} className="ml-4 font-bold relative -top-4">
                  사이즈
                </div>
                <div className="flex text-sm uppercase flex-col ">
                  <div>
                    <button onClick={addCost} className="border border-solid px-3 mr-1">
                      225
                    </button>
                    <button onClick={addCost} className="border border-solid px-3 mr-1">
                      230
                    </button>
                    <button onClick={addCost} className="border border-solid px-3 mr-1">
                      235
                    </button>
                    <button onClick={addCost} className="border border-solid px-3 mr-1">
                      240
                    </button>
                    <button onClick={addCost} className="border border-solid px-3 mr-1">
                      245
                    </button>
                    <button onClick={addCost} className="border border-solid px-3 mr-1">
                      250
                    </button>
                  </div>
                  <div className="py-1">
                    <button onClick={addCost} className="border border-solid px-3 mr-1">
                      255
                    </button>
                    <button onClick={addCost} className="border border-solid px-3 mr-1">
                      260
                    </button>
                    <button onClick={addCost} className="border border-solid px-3 mr-1">
                      265
                    </button>
                    <button onClick={addCost} className="border border-solid px-3 mr-1">
                      270
                    </button>
                    <button onClick={addCost} className="border border-solid px-3 mr-1">
                      275
                    </button>
                    <button onClick={addCost} className="border border-solid px-3 mr-1">
                      280
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ height: 95 }} className="flex items-center justify-between pr-4">
                <div style={{ width: 200 }} className="ml-4 text-sm font-bold">
                  총 결제금액
                </div>
                <div className="flex items-end">
                  <div className="text-mainRed mr-5 text-3xl font-bold">{cost === 0 ? 0 : `${cost / 1000},000`}</div>
                  <div>원</div>
                </div>
              </div>
              <div style={{ height: 95 }} className="flex items-center justify-between pr-4">
                <button
                  style={{ width: 580 }}
                  className="ml-4 text-lg font-bold bg-gray-500 h-16 flex items-center justify-center text-white hover:bg-black transition-all duration-500"
                >
                  장바구니
                </button>
                <button style={{ width: 580 }} className="ml-4 text-lg font-bold bg-black h-16 flex items-center justify-center text-white">
                  바로구매
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPresenter;
