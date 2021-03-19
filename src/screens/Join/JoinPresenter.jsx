import React from 'react';
import Select from 'react-select';

const JoinPresenter = () => {
  const emailOptions = [
    { value: '', label: '직접입력' },
    { value: '@naver.com', label: 'naver.com' },
    { value: '@gmail.com', label: 'gmail.com' },
    { value: '@hanmail.com', label: 'hanmail.com' },
  ];

  return (
    <div style={{ minWidth: 1700 }} className="flex flex-col items-center font-noto font-bold">
      <div className="mt-28 text-3xl font-bold font-mont">X-RT 온라인 회원가입</div>
      <div style={{ width: 800 }} className="border-b-4 border-solid mt-3 text-2xl pb-3">
        약관동의
      </div>
      <div className="flex justify-between pr-2 py-8 pl-5 text-lg border-b border-gray-400 border-solid" style={{ width: 800 }}>
        <div className="flex">
          <div className="mr-3">
            <input type="checkbox" style={{ transform: 'scale(1.5)' }} />
          </div>
          <label htmlFor="">전체 약관에 동의합니다.</label>
        </div>
        {/* <i class="fas fa-chevron-down"></i> */}
      </div>
      <div
        className="flex justify-between items-center pr-2 py-7 pl-5 text-base border-b border-gray-400 border-solid font-normal"
        style={{ width: 800 }}
      >
        <div className="flex">
          <div className="mr-3">
            <input type="checkbox" style={{ transform: 'scale(1.5)' }} />
          </div>
          <label htmlFor="">
            <span className="text-mainRed">[필수]</span> 사이트 이용약관
          </label>
        </div>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div
        className="flex justify-between items-center pr-2 py-7 pl-5 text-base border-b border-gray-400 border-solid font-normal"
        style={{ width: 800 }}
      >
        <div className="flex">
          <div className="mr-3">
            <input type="checkbox" style={{ transform: 'scale(1.5)' }} />
          </div>
          <label htmlFor="">
            <span className="text-mainRed">[필수]</span> 전자상거래 이용약관
          </label>
        </div>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div
        className="flex justify-between items-center pr-2 py-7 pl-5 text-base border-b border-gray-400 border-solid font-normal"
        style={{ width: 800 }}
      >
        <div className="flex">
          <div className="mr-3">
            <input type="checkbox" style={{ transform: 'scale(1.5)' }} />
          </div>
          <label htmlFor="">
            <span className="text-mainRed">[필수]</span> 개인정보 수집 및 이용 동의
          </label>
        </div>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div
        className="flex justify-between items-center pr-2 py-7 pl-5 text-base border-b border-gray-400 border-solid font-normal"
        style={{ width: 800 }}
      >
        <div className="flex">
          <div className="mr-3">
            <input type="checkbox" style={{ transform: 'scale(1.5)' }} />
          </div>
          <label htmlFor="">
            <span className="text-black">[선택]</span> 개인정보 수집 및 이용 동의
          </label>
        </div>
        <i class="fas fa-chevron-down"></i>
      </div>
      <div style={{ width: 800 }} className="text-mainRed font-normal pt-5">
        <i className="fas fa-exclamation-circle mr-2"></i>만 14세 미만은 회원가입이 불가능합니다.
      </div>

      <div style={{ width: 800 }}>
        <form className="w-full pt-14">
          <div className="border-b border-solid border-gray-400 pb-12">
            <div className="border-b-4 border-solid text-2xl pb-3 mb-14 w-full">회원정보</div>
            <div className="flex text-lg mb-7 mx-5 ">
              <div style={{ width: 130 }}>
                <label htmlFor="">이름</label>
              </div>
              <div className="border-b border-solid">
                <input type="text" style={{ width: 620, paddingBottom: 8 }} placeholder="한글, 영문, 숫자만 입력해주세요." />
              </div>
            </div>
            <div className="flex text-lg mb-7 mx-5">
              <div style={{ width: 130 }}>
                <label htmlFor="">아이디</label>
              </div>
              <div className="border-b border-solid">
                <input type="text" style={{ width: 620, paddingBottom: 8 }} placeholder="아이디를 입력해주세요 (영문,숫자 사용 3~20자)" />
              </div>
            </div>
            <div className="flex text-lg mb-7 mx-5">
              <div style={{ width: 130 }}>
                <label htmlFor="">비밀번호</label>
              </div>
              <div className="border-b border-solid">
                <input
                  type="password"
                  style={{ width: 620, paddingBottom: 8 }}
                  placeholder="비밀번호를 입력해주세요(영문, 숫자, 특수문자 2개 이상 10~20자)"
                />
              </div>
            </div>
            <div className="flex text-lg mb-7 mx-5">
              <div style={{ width: 130 }}>
                <label htmlFor="">비밀번호 확인</label>
              </div>
              <div className="border-b border-solid">
                <input type="password" style={{ width: 620, paddingBottom: 8 }} placeholder="비밀번호를 재입력해주세요" />
              </div>
            </div>
            <div className="flex text-lg mb-7 mx-5">
              <div style={{ width: 130 }}>
                <label htmlFor="">이메일</label>
              </div>
              <div className="border-b border-solid">
                <input type="text" style={{ width: 300, paddingBottom: 8 }} placeholder="이메일 주소를 입력해주세요" />
              </div>
              <div style={{ width: 300, marginLeft: 20 }}>
                <Select options={emailOptions} defaultValue={emailOptions[0]} />
              </div>
            </div>
            <div className="flex text-lg mb-7 mx-5">
              <div style={{ width: 130 }}>
                <label htmlFor="">휴대폰 번호</label>
              </div>
              <div className="border-b border-solid">
                <input type="text" style={{ width: 620, paddingBottom: 8 }} placeholder="휴대폰 번호를 '-'없이 입력해주세요" />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center pt-10">
            <button className="h-16 w-52 mr-4 bg-gray-400 text-white font-bold hover:bg-gray-600 transition"> 취소</button>
            <button className="h-16 w-52 bg-black text-white font-bold">회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinPresenter;
