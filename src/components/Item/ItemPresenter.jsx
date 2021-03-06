import React from 'react';
import { Link } from 'react-router-dom';
const ItemPresenter = ({ img, brand, serial, cost, isNew, id, brand_kor, sale }) => {
  return (
    <Link to={`/product/${id}`} className="h-96 flex w-60 flex-col items-center relative left-4 font-noto">
      <div>
        <img src={img} alt="" />
        <div className="h-20 flex flex-col justify-center ">
          <div className="font-bold py-2">{brand_kor}</div>
          <div className="uppercase ">{serial}</div>
        </div>
        <div className="h-auto flex flex-col justify-center font-mont">
          <div className="font-bold py-2 text-lg">{new Intl.NumberFormat().format(cost * (1 - sale))}원</div>
          {isNew ? <div className="uppercase border border-solid w-12 text-center font-bold text-sm">new</div> : null}
        </div>
      </div>
    </Link>
  );
};

export default ItemPresenter;
