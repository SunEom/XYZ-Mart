import React from 'react';
const EventItemPresenter = ({ img, title, subtitle }) => {
  return (
    <div className="h-96 w-96 flex flex-col items-center justify-end ">
      <img src={img} className="w-full h-60" alt="" />
      <div className="relative bottom-12 w-80 bg-white h-1/4 flex flex-col justify-center px-4 shadow">
        <div className="text-lg pb-2 font-bold">{title}</div>
        <div className="text-xs text-gray-400">{subtitle}</div>
      </div>
    </div>
  );
};

export default EventItemPresenter;
