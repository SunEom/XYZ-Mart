import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyPagePresenter = ({ user, myOrder }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const changeDate = (e) => {
    let temp = new Date(endDate);
    temp.setMonth(temp.getMonth() - e.target.value);
    setStartDate(temp);
  };

  const dateFiltering = () => {
    let temp = myOrder.filter(
      (a) =>
        new Date(a.created_at.slice(0, 10)) >= new Date(`${startDate.toISOString().split('T')[0]} 00:00:00`) &&
        new Date(a.created_at.slice(0, 10)) <= new Date(`${endDate.toISOString().split('T')[0]} 23:59:59`)
    );

    return temp;
  };

  return (
    <div style={{ minWidth: 1700 }} className="flex items-center justify-center font-noto flex-col">
      <div style={{ width: 1250 }} className="text-3xl font-bold font-mont mt-16">
        마이페이지
      </div>
      <div className="flex mt-6" style={{ width: 1250 }}>
        <div style={{ width: 225 }}>
          <div className="text-lg font-bold mb-3">쇼핑내역</div>
          <div className="text-mainRed underline">주문/배송 현황조회</div>
        </div>
        <div>
          <div style={{ width: 980, height: 200 }} className="border-4 border-solid border-gray-400 mt-10 flex items-center justify-center">
            <div style={{ width: 890 }} className="flex justify-between items-center">
              <div className="flex items-center">
                <i className="far fa-user text-8xl"></i>
                <div className="ml-7 font-mont">
                  <div className="mb-3 text-xl">
                    {user?.name}님은 <span className="font-bold">통합맴버십 회원</span> 입니다.
                  </div>
                  <div>
                    <span className="uppercase mr-3 font-bold mb-1">membership</span>
                    <span className="uppercase font-bold text-gray-500">{user?.membership}</span>
                  </div>
                  <div>
                    <span className="mr-3 font-bold">맴버십 회원 가입일</span>
                    <span className="font-bold text-gray-500">{user?.created_at?.slice(0, 10)}</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div style={{ width: 180, height: 100 }} className="border-l border-solid">
                  <div className="ml-7 mb-5">
                    <i class="fas fa-ticket-alt text-xl"></i>
                    <div>나의 쿠폰</div>
                  </div>
                  <div className="text-right mr-5">
                    <span className="text-xl font-bold font-mont">0</span>
                    <span className="font-bold">개</span>
                  </div>
                </div>
                <div style={{ width: 180, height: 100 }} className="border-l border-solid">
                  <div className="ml-7 mb-5">
                    <div
                      className="w-7 h-7 flex justify-center items-center border-2 border-solid border-black text-mainRed font-bold"
                      style={{ borderRadius: 100 }}
                    >
                      P
                    </div>
                    <div>나의 포인트</div>
                  </div>
                  <div className="text-right mr-5">
                    <span className="text-xl font-bold font-mont">{new Intl.NumberFormat().format(user?.point)}</span>
                    <span className="font-bold">P</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <div className="flex justify-between items-center border-b-2 border-solid border-black pb-2">
              <div className="font-bold text-xl">최근주문내역</div>
            </div>
            <div className="flex px-5 justify-between py-14 border-b border-solid border-gray-300">
              <div className="w-1/5 flex flex-col items-center relative">
                <div className="text-3xl font-mont font-bold">0</div>
                <div className="text-center text-gray-500 mt-2">입금대기</div>
                <div className="absolute -right-2 top-4 text-2xl text-gray-300">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
              <div className="w-1/5 flex flex-col items-center relative">
                <div className="text-3xl font-mont font-bold">0</div>
                <div className="text-center text-gray-500 mt-2">결제완료</div>
                <div className="absolute -right-2 top-4 text-2xl text-gray-300">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
              <div className="w-1/5 flex flex-col items-center relative">
                <div className="text-3xl font-mont font-bold">0</div>
                <div className="text-center text-gray-500 mt-2">상품준비중</div>
                <div className="absolute -right-2 top-4 text-2xl text-gray-300">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
              <div className="w-1/5 flex flex-col items-center relative">
                <div className="text-3xl font-mont font-bold">0</div>
                <div className="text-center text-gray-500 mt-2">배송중/픽업준비완료</div>
                <div className="absolute -right-2 top-4 text-2xl text-gray-300">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
              <div className="w-1/5 flex flex-col items-center relative">
                <div className="text-3xl font-mont font-bold">0</div>
                <div className="text-center text-gray-500 mt-2">배송/수령완료</div>
                <div className="absolute"></div>
              </div>
            </div>
            <div className="flex border-b border-solid border-gray-400">
              <div className="flex justify-between items-center w-1/3 py-3 pl-8">
                <div className="flex items-center">
                  <i className="fas fa-times mr-2"></i>주문취소
                </div>
                <div className="border-r border-solid border-gray-400 pr-8">
                  <span className="font-bold font-mont text-lg">0</span>
                  <span>건</span>
                </div>
              </div>
              <div className="flex justify-between items-center w-1/3 py-3 pl-8">
                <div className="flex items-center">
                  <i className="fas fa-arrows-alt-h mr-2"></i>교환신청
                </div>
                <div className="border-r border-solid border-gray-400 pr-8">
                  <span className="font-bold font-mont text-lg">0</span>
                  <span>건</span>
                </div>
              </div>
              <div className="flex justify-between items-center w-1/3 py-3 pl-8">
                <div className="flex items-center">
                  <i className="fas fa-arrow-circle-right mr-2"></i>반품신청
                </div>
                <div className="pr-8">
                  <span className="font-bold font-mont text-lg">0</span>
                  <span>건</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <div className="flex justify-between items-center border-b-2 border-solid border-black pb-2">
              <div className="font-bold text-xl">주문/배송 현황 조회</div>
            </div>
            <div
              className="border-t border-b border-solid border-gray-400 py-10 mt-5 px-8 flex items-center"
              style={{ backgroundColor: '#F8F8F8' }}
            >
              <div className="font-bold mr-14">온라인 쇼핑몰 구매내역</div>
              <div>
                <button
                  value="1"
                  onClick={changeDate}
                  className="bg-white border border-solid border-gray-500 px-4 py-1 ml-2"
                  style={{ height: 40 }}
                >
                  1개월
                </button>
                <button
                  className="bg-white border border-solid border-gray-500 px-4 py-1 ml-2"
                  value="3"
                  onClick={changeDate}
                  style={{ height: 40 }}
                >
                  3개월
                </button>
                <button
                  className="bg-white border border-solid border-gray-500 px-4 py-1 ml-2"
                  value="6"
                  onClick={changeDate}
                  style={{ height: 40 }}
                >
                  6개월
                </button>
                <button
                  className="bg-white border border-solid border-gray-500 px-4 py-1 ml-2"
                  value="12"
                  onClick={changeDate}
                  style={{ height: 40 }}
                >
                  1년
                </button>
              </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy/MM/dd"
                className="border border-solid border-black ml-3 py-2 pl-3 w-28 h-full"
              />
              <span className="ml-2 -mr-1">~</span>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="yyyy/MM/dd"
                className="border border-solid border-black ml-3 py-2 pl-3 w-28 "
              />
              <button className="bg-black text-white px-12 ml-3 py-2" style={{ height: 40 }}>
                조회
              </button>
            </div>
            {myOrder.length === 0
              ? null
              : dateFiltering().map((order) => (
                  <div className="flex justify-between font-mont border-b border-solid border-gray-300">
                    <div style={{ width: 350, height: 140 }} className="ml-6 flex items-center">
                      <img style={{ width: 100 }} src={`${order.product_info.img}&w=285&h=285&q=80`} alt="" />
                      <div className="flex flex-col ml-3">
                        <div className="font-bold mb-1">{order.product_info.brand}</div>
                        <div className="text-gray-400 text-sm uppercase">{order.product_info.serial}</div>
                        <div className="text-gray-400 text-sm uppercase">{order.product_info.stylecode.slice(0, 3)}</div>
                        <div className="text-gray-400 text-sm ">{order.size}</div>
                      </div>
                    </div>
                    <div style={{ height: 140 }} className="ml-6 flex items-center text-sm">
                      <div className="text-gray-500 mr-16">{order.quantity}</div>
                      <div className="flex flex-col items-center mr-16">
                        <div className="text-mainRed uppercase font-bold mb-1">
                          {new Intl.NumberFormat().format(
                            Math.floor(order.product_info.cost * order.quantity * (1 - order.product_info.sale)) / 100
                          )}
                          P
                        </div>
                        <div className="text-xs">예상적립 포인트</div>
                      </div>
                      <div className="font-bold text-lg mr-16">
                        {new Intl.NumberFormat().format(order.product_info.cost * order.quantity * (1 - order.product_info.sale))}원
                      </div>
                      <div className="mr-8 flex flex-col items-center">
                        <div className="text-xs">주문일자</div>
                        <div className="text-xs">{order.created_at.slice(0, 10)}</div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPagePresenter;
