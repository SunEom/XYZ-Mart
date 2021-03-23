import React from 'react';
import Select from 'react-select';
import MItem from '../../components/MItem';

const SearchPresenter = () => {
  const sortOptions = [
    { value: 'new', label: '신상품순' },
    { value: 'best', label: '베스트상품순' },
    { value: 'highcost', label: '낮은가격순' },
    { value: 'lowcost', label: '높은가격순' },
  ];
  return (
    <div style={{ minWidth: 1700 }} className="flex items-center justify-center font-noto flex-col">
      <div className="text-2xl font-mont font-bold mt-28">
        <span className="text-mainRed">나이키</span>
        <span>에 대한 432 건의 검색결과가 있습니다.</span>
      </div>
      <div className="border-b-2 border-solid border-black flex items-center justify-between" style={{ width: 1200 }}>
        <div>
          총 <span className="text-mainRed font-bold">432</span>개의 상품이 있습니다.
        </div>
        <div className="flex">
          <div style={{ width: 160, marginLeft: 20, height: 45 }}>
            <Select onChange={(e) => console.log(e.label)} options={sortOptions} defaultValue={sortOptions[0]} />
          </div>
        </div>
      </div>
      <div style={{ width: 1200 }} className="flex justify-between flex-wrap">
        <div style={{ width: 285, height: 470 }} className="mt-5 relative">
          <MItem
            id={2}
            img="https://images.unsplash.com/photo-1566236485911-3bd1f07f9f7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
            company="VANS"
            serial="air-3029"
            cost="97,000"
          />
          <div
            className="w-10 h-10 flex flex-col items-center justify-center text-mainRed bg-mainYellow font-alfa absolute right-2"
            style={{ borderRadius: 100, fontSize: 6, bottom: 165 }}
          >
            <div className="-mb-1">XYZ</div>
            <div>MART</div>
          </div>
        </div>
        <div style={{ width: 285, height: 470 }} className="mt-5 relative">
          <MItem
            id={2}
            img="https://images.unsplash.com/photo-1566236485911-3bd1f07f9f7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
            company="VANS"
            serial="air-3029"
            cost="97,000"
          />
          <div
            className="w-10 h-10 flex flex-col items-center justify-center text-mainRed bg-mainYellow font-alfa absolute right-2"
            style={{ borderRadius: 100, fontSize: 6, bottom: 165 }}
          >
            <div className="-mb-1">XYZ</div>
            <div>MART</div>
          </div>
        </div>
        <div style={{ width: 285, height: 470 }} className="mt-5 relative">
          <MItem
            id={2}
            img="https://images.unsplash.com/photo-1566236485911-3bd1f07f9f7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
            company="VANS"
            serial="air-3029"
            cost="97,000"
          />
          <div
            className="w-10 h-10 flex flex-col items-center justify-center text-mainRed bg-mainYellow font-alfa absolute right-2"
            style={{ borderRadius: 100, fontSize: 6, bottom: 165 }}
          >
            <div className="-mb-1">XYZ</div>
            <div>MART</div>
          </div>
        </div>
        <div style={{ width: 285, height: 470 }} className="mt-5 relative">
          <MItem
            id={2}
            img="https://images.unsplash.com/photo-1566236485911-3bd1f07f9f7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
            company="VANS"
            serial="air-3029"
            cost="97,000"
          />
          <div
            className="w-10 h-10 flex flex-col items-center justify-center text-mainRed bg-mainYellow font-alfa absolute right-2"
            style={{ borderRadius: 100, fontSize: 6, bottom: 165 }}
          >
            <div className="-mb-1">XYZ</div>
            <div>MART</div>
          </div>
        </div>
        <div style={{ width: 285, height: 470 }} className="mt-5 relative">
          <MItem
            id={2}
            img="https://images.unsplash.com/photo-1566236485911-3bd1f07f9f7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
            company="VANS"
            serial="air-3029"
            cost="97,000"
          />
          <div
            className="w-10 h-10 flex flex-col items-center justify-center text-mainRed bg-mainYellow font-alfa absolute right-2"
            style={{ borderRadius: 100, fontSize: 6, bottom: 165 }}
          >
            <div className="-mb-1">XYZ</div>
            <div>MART</div>
          </div>
        </div>
        <div style={{ width: 285, height: 470 }} className="mt-5 relative">
          <MItem
            id={2}
            img="https://images.unsplash.com/photo-1566236485911-3bd1f07f9f7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
            company="VANS"
            serial="air-3029"
            cost="97,000"
          />
          <div
            className="w-10 h-10 flex flex-col items-center justify-center text-mainRed bg-mainYellow font-alfa absolute right-2"
            style={{ borderRadius: 100, fontSize: 6, bottom: 165 }}
          >
            <div className="-mb-1">XYZ</div>
            <div>MART</div>
          </div>
        </div>
        <div style={{ width: 285, height: 470 }} className="mt-5 relative">
          <MItem
            id={2}
            img="https://images.unsplash.com/photo-1566236485911-3bd1f07f9f7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
            company="VANS"
            serial="air-3029"
            cost="97,000"
          />
          <div
            className="w-10 h-10 flex flex-col items-center justify-center text-mainRed bg-mainYellow font-alfa absolute right-2"
            style={{ borderRadius: 100, fontSize: 6, bottom: 165 }}
          >
            <div className="-mb-1">XYZ</div>
            <div>MART</div>
          </div>
        </div>
        <div style={{ width: 285, height: 470 }} className="mt-5 relative">
          <MItem
            id={2}
            img="https://images.unsplash.com/photo-1566236485911-3bd1f07f9f7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=285&h=285&q=80"
            company="VANS"
            serial="air-3029"
            cost="97,000"
          />
          <div
            className="w-10 h-10 flex flex-col items-center justify-center text-mainRed bg-mainYellow font-alfa absolute right-2"
            style={{ borderRadius: 100, fontSize: 6, bottom: 165 }}
          >
            <div className="-mb-1">XYZ</div>
            <div>MART</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPresenter;
