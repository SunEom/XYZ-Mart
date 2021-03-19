import React from 'react';

const FooterPresenter = () => {
  return (
    <div style={{ minWidth: 1700 }} className="w-full font-noto mt-20">
      {/* top part */}
      <div className="h-12 bg-gray-200 w-full flex justify-center items-center">
        <div style={{ width: 700 }} className="flex items-center">
          <div className="text-sm mr-6">통합고객센터</div>
          <div className="text-sm text-gray-500 mr-3">123-123-1234 • 9999-9999</div>
          <div className="text-sm text-gray-400">월~금 9:00~12:00/13:00~18:00(주말,공휴일 휴무)</div>
        </div>
        <div style={{ width: 500 }} className="flex items-center">
          <div className="mr-5 text-sm">NOTICE</div>
          <div className="mr-3 text-sm">배송 지연 안내</div>
          <div>
            <i class="fas fa-plus"></i>
          </div>
        </div>
      </div>
      {/* bottom part */}
      <div className="w-full flex justify-center items-center pt-10">
        <div style={{ width: 700 }}>
          <div className="text-mainRed text-2xl font-alfa pt-7 pb-4">XYZ-MART</div>
          <div>해당 사이트는 ABC-MART 클론코딩을 위한 사이트입니다.</div>
          <div className="text-xs pt-2">https://suneom.github.io/XYZ-Mart</div>
        </div>
        <div style={{ width: 500 }} className="flex relative top-8">
          <div className="uppercase text-sm w-1/3">
            <div>Help</div>
            <div className="text-xs pt-4 pb-1">고객센터</div>
            <div className="text-xs pb-1">입점/제휴 문의</div>
            <div className="text-xs pb-1">기프트카드 안내</div>
          </div>
          <div className="uppercase text-sm w-1/3">
            <div>brand</div>
            <div className="text-xs pt-4 pb-1">Nike</div>
            <div className="text-xs pb-1">New Balance</div>
            <div className="text-xs pb-1">Adidas</div>
            <div className="text-xs pb-1">Converse</div>
          </div>
          <div className="uppercase text-sm w-1/3">
            <div>
              <div>social</div>
              <div className="text-xs pt-4 pb-1 flex">
                <i className="fab fa-facebook-square fa-3x text-gray-500 mr-2"></i>
                <i class="fab fa-instagram fa-3x text-gray-500 mr-2"></i>
                <i class="fab fa-youtube fa-3x text-gray-500 mr-2"></i>
                <i class="fab fa-twitter-square fa-3x text-gray-500 mr-2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPresenter;
