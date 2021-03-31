import React from 'react';
import Select from 'react-select';
import MItem from '../../components/MItem';

const CategoryPresenter = ({ result, sortOptions, onChange, category, loading }) => {
  return loading ? null : (
    <div style={{ minWidth: 1700 }} className="flex items-center justify-center font-noto flex-col">
      <div className="text-2xl font-mont font-bold mt-20 mb-5">
        For <span className="uppercase">{category}</span>
      </div>
      <div className="border-b-2 border-solid border-black flex items-center justify-between" style={{ width: 1200 }}>
        <div>
          총 <span className="text-mainRed font-bold">432</span>개의 상품이 있습니다.
        </div>
        <div className="flex">
          <div style={{ width: 160, marginLeft: 20, height: 45 }}>
            <Select onChange={onChange} options={sortOptions} defaultValue={sortOptions[0]} />
          </div>
        </div>
      </div>
      <div style={{ width: 1250 }} className="flex flex-wrap relative left-6">
        {result.map((r) => (
          <div style={{ width: 285, height: 470 }} className="mt-5 relative mr-5" key={r.id}>
            <MItem {...r} img={`${r.img}&w=285&h=285&q=80`} />
            <div
              className="w-10 h-10 flex flex-col items-center justify-center text-mainRed bg-mainYellow font-alfa absolute right-2"
              style={{ borderRadius: 100, fontSize: 6, bottom: 165 }}
            >
              <div className="-mb-1">XYZ</div>
              <div>MART</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPresenter;
