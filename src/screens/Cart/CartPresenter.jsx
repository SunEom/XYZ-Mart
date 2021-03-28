import React from 'react';
import { Link } from 'react-router-dom';
const CartPresenter = ({ cart, onChange, selectedItems, setSelectedItems }) => {
  const selectAll = (e) => {
    if (e.target.checked) {
      const checkboxs = document.getElementsByClassName('selected_item');
      for (let checkbox of checkboxs) checkbox.checked = true;
      setSelectedItems(cart);
    } else {
      const checkboxs = document.getElementsByClassName('selected_item');
      for (let checkbox of checkboxs) checkbox.checked = false;
      setSelectedItems([]);
    }
  };
  return (
    <div style={{ minWidth: 1700 }} className="flex items-center justify-center font-noto flex-col">
      <div style={{ width: 1250 }} className="flex justify-between mt-14">
        <div className="text-2xl font-mont font-bold">장바구니</div>
        <div className="flex">
          <div className="mr-3">
            01. 장바구니 <i className="fas fa-chevron-right"></i>
          </div>
          <div className="mr-3">
            02. 주문서작성/결제 <i className="fas fa-chevron-right"></i>
          </div>
          <div>03. 주문완료</div>
        </div>
      </div>
      <div style={{ width: 1250 }} className="flex flex-col justify-between mt-12 items-center">
        <div className="border-b-2 border-solid border-black w-full pb-5 font-bold font-mont" style={{ fontSize: 22 }}>
          일반배송({cart?.length})
        </div>
        {cart?.length !== 0 ? (
          <div style={{ minHeight: 580 }} className="w-full">
            {/* 장바구니에 물건이 있는경우 */}
            <div>
              <div className=" border-b border-black border-solid flex justify-between items-center">
                <div>
                  <input type="checkbox" className="my-5 ml-2 mr-2" style={{ transform: 'scale(1.5)' }} onChange={selectAll} />
                  <label htmlFor="">전체선택</label>
                </div>
                <div className="text-sm text-gray-400">
                  <i className="fas fa-store-alt mr-2"></i>매장픽업 가능상품
                </div>
              </div>
              <div
                className="w-full flex items-center justify-between px-5 border-b border-solid border-gray-300 font-mont text-sm font-bold"
                style={{ backgroundColor: '#F0F0F0', height: 50 }}
              >
                <div className="flex">
                  <div className="mr-2 pr-2 border-r border-solid border-gray-400">일반 배송 상품</div>
                  <div>
                    <span className="text-mainRed">{cart?.length}</span> 개
                  </div>
                  <div className="ml-2 pl-2 border-l border-solid border-gray-400">편의점 픽업 가능</div>
                </div>
                <div className="text-sm text-gray-600 font-normal">
                  <i className="fas fa-truck"></i> 무료배송
                </div>
              </div>
              {/* 상품내용 */}
              {cart?.map((item, index) => (
                <div key={index} className="flex justify-between font-mont border-b border-solid border-gray-300">
                  <div style={{ width: 350, height: 140 }} className="ml-6 flex items-center">
                    <input
                      type="checkbox"
                      style={{ transform: 'scale(1.3)' }}
                      className="selected_item mr-7"
                      onChange={(e) => {
                        const checked = onChange(e);
                        if (checked) setSelectedItems([...selectedItems, cart[index]]);
                        else setSelectedItems(selectedItems.filter((i) => i !== cart[index]));
                      }}
                    />
                    <img style={{ width: 100 }} src={`${item.product_info.img}&w=285&h=285&q=80`} alt="" />
                    <div className="flex flex-col ml-3">
                      <div className="font-bold mb-1">{item.product_info.brand}</div>
                      <div className="text-gray-400 text-sm uppercase">{item.product_info.name}</div>
                      <div className="text-gray-400 text-xs uppercase py-1">{item.product_info.stylecode}</div>
                      <div className="text-gray-400 text-xs ">{item.size}</div>
                    </div>
                  </div>
                  <div style={{ height: 140 }} className="ml-6 flex items-center text-sm">
                    <div className="text-gray-500 mr-16">{item.quantity}</div>
                    <div className="flex flex-col items-center mr-16">
                      <div className="text-mainRed uppercase font-bold mb-1">
                        {new Intl.NumberFormat().format(
                          Math.floor(item.product_info.cost * item.quantity * (1 - item.product_info.sale)) / 100
                        )}
                        P
                      </div>
                      <div className="text-xs">통합맴버십 회원 가입시</div>
                      <div className="text-xs">예상적립 포인트</div>
                    </div>
                    <div className="font-bold text-lg mr-16">
                      <span>{new Intl.NumberFormat().format(item.product_info.cost * item.quantity * (1 - item.product_info.sale))}</span>원
                    </div>
                    <div className="mr-8 flex flex-col">
                      <button style={{ width: 110, height: 40 }} className="bg-black text-white font-bold mb-2">
                        바로구매
                      </button>
                      <button style={{ width: 110, height: 40 }} className="border-black border border-solid">
                        <i className="far fa-trash-alt"></i> 삭제
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center font-mont border-b-2 border-solid">
                <div>
                  <button style={{ width: 110, height: 40 }} className="border-black border border-solid mr-2 my-5 text-sm font-bold">
                    선택 삭제
                  </button>
                </div>
              </div>
              <div
                className="flex justify-between items-center font-mont border-b border-gray-400 border-solid font-bold"
                style={{ height: 65 }}
              >
                <div className="w-1/3 flex justify-between px-8 border-r border-gray-400 border-solid h-full items-center relative">
                  <div>주문금액</div>
                  <div className="text-sm">
                    <span className="text-xl">
                      {new Intl.NumberFormat().format(
                        selectedItems?.reduce(
                          (accumulator, currentValue) =>
                            accumulator + currentValue.product_info.cost * currentValue.quantity * (1 - currentValue.product_info.sale),
                          0
                        )
                      )}
                    </span>
                    원
                  </div>
                  <div
                    style={{ width: 30, height: 30, borderRadius: 15 }}
                    className="flex justify-center items-center border border-gray-500 border-solid bg-gray-500 absolute -right-4 text-white text-xl"
                  >
                    -
                  </div>
                </div>
                <div className="w-1/3 flex justify-between px-8 items-center relative">
                  <div>총 할인금액</div>
                  <div className="text-sm">
                    <span className="text-xl">0</span>원
                  </div>
                  <div
                    style={{ width: 30, height: 30, borderRadius: 15 }}
                    className="flex justify-center items-center border border-black border-solid bg-black absolute -right-4 text-white text-xl"
                  >
                    =
                  </div>
                </div>
                <div className="w-1/3 flex justify-between px-8 border-l border-gray-400 border-solid h-full items-center">
                  <div>주문금액</div>
                  <div className="text-sm text-mainRed">
                    <span className="text-xl">
                      {new Intl.NumberFormat().format(
                        selectedItems?.reduce(
                          (accumulator, currentValue) =>
                            accumulator + currentValue.product_info.cost * currentValue.quantity * (1 - currentValue.product_info.sale),
                          0
                        )
                      )}
                    </span>
                    원
                  </div>
                </div>
              </div>
              <div
                className="flex justify-between items-center font-mont border-b border-gray-400 border-solid text-sm"
                style={{ height: 110, backgroundColor: '#F8F8F8' }}
              >
                <div className="w-1/3 flex flex-col justify-center px-8 border-r border-gray-400 border-solid h-full relative">
                  <div className="flex items-center justify-between text-gray-500">
                    <div>주문금액</div>
                    <div>
                      <span>
                        {new Intl.NumberFormat().format(
                          selectedItems?.reduce(
                            (accumulator, currentValue) =>
                              accumulator + currentValue.product_info.cost * currentValue.quantity * (1 - currentValue.product_info.sale),
                            0
                          )
                        )}
                      </span>
                      원
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-gray-500">
                    <div>추가 배송비</div>
                    <div>
                      <span>0</span>원
                    </div>
                  </div>
                </div>
                <div className="w-1/3 flex justify-between px-8 items-center relative"></div>
                <div className="w-1/3 flex flex-col justify-center px-8 border-l border-gray-400 border-solid h-full items-between">
                  <div className="flex w-full items-center justify-between text-gray-500">
                    <div>예상적립 포인트</div>
                    <div>
                      <span>
                        {new Intl.NumberFormat().format(
                          selectedItems?.reduce(
                            (accumulator, currentValue) =>
                              accumulator + currentValue.product_info.cost * currentValue.quantity * (1 - currentValue.product_info.sale),
                            0
                          ) / 100
                        )}
                      </span>
                      P
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs">- 통합맴버십 회원 가입시 적립예정 포인트</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center font-mont my-10">
              <button
                style={{ width: 200, height: 60 }}
                className="border border-solid border-black font-bold flex justify-center items-center hover:bg-gray-200 transition"
              >
                계속 쇼핑하기
              </button>
              <button
                style={{ width: 230, height: 60 }}
                className="border border-solid border-gray-500 mx-5 font-bold text-white bg-gray-500 flex justify-center items-center hover:bg-black transition"
              >
                일반배송 선택상품 주문하기
              </button>
              <button
                style={{ width: 230, height: 60 }}
                className="border border-solid border-black bg-black font-bold flex justify-center items-center text-white"
              >
                일반배송 전체상품 주문하기
              </button>
            </div>
          </div>
        ) : (
          <div style={{ height: 580 }} className="w-full flex flex-col justify-center items-center">
            {/* 장바구니에 물건이 없을때만 출력 */}
            <div
              style={{ width: 80, height: 80, borderRadius: 40 }}
              className="border-2 border-solid border-gray-400 flex justify-center items-center text-3xl text-gray-400 mb-3"
            >
              !
            </div>
            <div className="font-bold text-lg">장바구니에 담긴 상품이 없습니다.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPresenter;
