import React from 'react';
import { Link } from 'react-router-dom';

const HeaderPresenter = ({ onSearch, user, onLogout, cart }) => {
  return (
    <header className="font-alfa w-full">
      {/* Top Part */}
      <div
        className="flex justify-between py-1 px-52 whitespace-nowrap border-solid border-b border-gray-300 w-full"
        style={{ height: 35, minWidth: 1700 }}
      >
        <div className="pr-80">
          <Link to="1" className="text-black px-5 text-lg font-bold border-solid border-r border-gray-300 ">
            <span>Z</span>
            <span className="text-sm">-RT</span>
          </Link>
          <Link to="1" className="text-mainRed px-5 text-lg font-bold  border-solid border-r border-gray-300  ">
            <span>XYZ</span>
            <span className="text-sm">-MART</span>
          </Link>
          <Link to="1" className="text-black px-5 text-lg font-bold">
            <span>XYZ</span>
            <span className="text-sm">-MART</span>
          </Link>
        </div>
        <div className="pl-80">
          {user ? (
            <form onSubmit={onLogout} className="px-2 text-xs text-bold inline">
              <button type="submit"> 로그아웃</button>
            </form>
          ) : (
            <>
              <Link to="/login" className="px-2 text-xs text-bold">
                로그인
              </Link>
              <Link to="/join" className="px-2 text-xs text-bold">
                회원가입
              </Link>
            </>
          )}
          <Link to="1" className="px-2 text-xs text-bold">
            고객센터
          </Link>
          <Link to="1" className="px-2 text-xs text-bold">
            매장찾기
          </Link>
        </div>
      </div>

      {/* Middle Part */}
      <div
        className="w-full justify-between py-1 whitespace-nowrap flex items-center box-border px-52 "
        style={{ height: 130, minWidth: 1310 }}
      >
        <Link to="/" className=" px-5 py-10 text-3xl text-extrabold text-mainRed flex items-center box-sizing ">
          <span>XYZ</span>
          <span className="text-2xl">-MART</span>
        </Link>

        <div className=" box-border flex justify-center px-56 font-noto">
          <select
            className="text-bold text-sm rounded rounded-b-none pl-3 py-2 outline-none border-solid border-b-2 border-black"
            defaultValue="XYZ-MART"
          >
            <option className="py-1 font-noto">통합검색</option>
            <option className="py-1 font-noto">XYZ-MART</option>
            <option className="py-1 font-noto">GRAND STAGE</option>
          </select>
          <form
            onSubmit={onSearch}
            className="pt-2 text-black flex items-center mr-10 border-solid border-b-2 border-black focus-within:border"
          >
            <input
              className=" placeholder-gray plcaeholder h-10 w-72 pl-3 pr-4 text-base focus:outline-none"
              type="text"
              name="keyword"
              placeholder="봄 신상 컬렉션★10% 할인★"
              autoComplete="off"
            />
            <button className="mr-3">
              <i className="fas fa-filter fa-lg"></i>
            </button>
            <button type="submit" className="">
              <i className="fas fa-search fa-lg"></i>
            </button>
          </form>
        </div>

        <div className="pl-14 relative">
          <Link to="/mypage" className="focus:outline-none">
            <i className="far fa-user fa-2x pr-10"></i>
          </Link>
          <Link to="/cart" className="focus:outline-none">
            <i className="fas fa-shopping-bag fa-2x"></i>
            {cart ? (
              <div className="h-4 w-4 bg-mainRed text-xs flex justify-center items-center text-white font-mont font-bold absolute -right-1 bottom-0">
                {cart.length}
              </div>
            ) : null}
          </Link>
        </div>
      </div>

      {/* Bottom Part */}
      <div
        className="h-12 min-w-full bg-mainRed flex justify-between py-1 px-52 whitespace-nowrap font-mont"
        style={{ height: 50, width: 1700 }}
      >
        <div className="flex items-center pr-20">
          <Link to="#" className="text-mainYellow px-5 text-base md:text-md font-medium uppercase ">
            Brand
          </Link>
          <Link to="/product/gender/men" className="text-white px-5 text-base text-md font-medium uppercase">
            men
          </Link>
          <Link to="/product/gender/women" className="text-white px-5 text-base text-md font-medium uppercase">
            women
          </Link>
          <Link to="/product/category/kids" className="text-white px-5 text-base text-md font-medium uppercase">
            kids
          </Link>
          <Link to="/product/category/sale" className="text-white px-5 text-base text-md font-medium uppercase">
            sale
          </Link>
          <Link to="#" className="text-white px-5 text-base text-md font-bold uppercase">
            아트배송
          </Link>
        </div>

        <div className="flex items-center pl-20 ">
          <Link to="#" className="text-mainYellow px-5 text-base md:text-md font-medium uppercase ">
            #NUOVO
          </Link>
          <Link to="/product/category/best" className="text-white px-5 text-base text-md font-medium uppercase">
            best
          </Link>
          <Link to="#" className="text-white px-5 text-base text-md font-bold uppercase">
            기획전
          </Link>
          <Link to="#" className="text-white px-5 text-base text-md font-bold uppercase">
            이벤트/쿠폰
          </Link>
          <Link to="#" className="text-white px-5 text-base text-md font-medium uppercase">
            hot deal
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderPresenter;
