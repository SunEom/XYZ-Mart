import React from 'react';
import { Link } from 'react-router-dom';
const ItemPresenter = ({ img, company, serial, cost, isNew, id }) => {
  return (
    <Link to={`/${id}`} className="h-96">
      <img src={img} />
      <div className="h-20 flex flex-col justify-center ">
        <div className="font-bold py-2">{company}</div>
        <div className="uppercase">{serial}</div>
      </div>
      <div className="h-auto flex flex-col justify-center ">
        <div className="font-bold py-2 text-lg">{cost}원</div>
        {isNew ? <div className="uppercase border border-solid w-12 text-center font-bold text-sm">new</div> : null}
      </div>
    </Link>
  );
};

export default ItemPresenter;
