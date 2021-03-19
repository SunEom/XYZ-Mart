import React from 'react';
import { Link } from 'react-router-dom';
const LoginPresenter = () => {
  return (
    <div style={{ minWidth: 1700, height: 820 }} className="flex flex-col justify-center items-center font-noto">
      <div className="text-3xl font-bold pb-8">로그인</div>
      <div>
        <form>
          <div>
            <button className="border border-solid border-gray-300 py-4 px-28">회원 로그인</button>
            <button className="border border-solid border-gray-300 py-4 px-28">비회원 주문조회</button>
          </div>
          <div>
            <input
              type="text"
              className="border-b border-solid border-gray-300 w-full mt-16 pb-3 focus:outline-none pl-8 placeholder-gray-500 text-sm text-bold font-noto"
              autoComplete={false}
              placeholder="아이디를 입력해주세요."
            />
            <i className="far fa-user relative bottom-9 fa-md left-1"></i>
          </div>
          <div>
            <input
              type="password"
              className="border-b border-solid border-gray-300 w-full mt-2 pb-3 focus:outline-none pl-8 placeholder-gray-500 text-sm text-bold font-noto"
              autoComplete={false}
              placeholder="비밀번호를 입력해 주세요."
            />
            <i class="fas fa-lock  relative bottom-9 fa-md left-1"></i>
          </div>
          <div className="m-3 -mt-1 mb-8">
            <input type="checkbox" id="idCheckBox" style={{ transform: 'scale(1.5)', marginRight: 10 }} />
            <label htmlFor="idCheckBox" className="text-sm text-gray-400">
              아이디 저장
            </label>
          </div>
          <button type="submit" className="w-full bg-black text-white py-5 font-bold">
            로그인
          </button>
        </form>
        <div className="flex justify-center w-full text-gray-400">
          <div className="px-2 text-sm font-bold py-6">
            <Link to="">아이디 찾기</Link>
          </div>
          <div className="px-2 text-sm font-bold py-6">
            <Link to="">비밀번호 찾기</Link>
          </div>
          <div className="px-2 text-sm font-bold py-6">
            <Link to="/join">회원가입</Link>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="px-2 text-sm font-bold py-6">
            <Link to="#" className="border-r border-solid border-gray-300 pr-3 flex items-center relative -top-1">
              <img src="https://cdn.theorg.com/6aa26807-55ff-4e88-8441-d451d3ea1626_thumb.png" alt="" className="h-7 mr-2" />
              네이버 아이디로 로그인
            </Link>
          </div>
          <div className="px-2 text-sm font-bold py-6">
            <Link to="#">
              <i className="fab fa-facebook-f fa-lg mr-3 text-indigo-600"></i>페이스북 아이디로 로그인
            </Link>
          </div>
          <div className="px-2 text-sm font-bold py-6">
            <Link to="#" className="border-l border-solid border-gray-300 pl-3">
              <i class="fas fa-comment mr-3"></i>카카오 아이디로 로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPresenter;
