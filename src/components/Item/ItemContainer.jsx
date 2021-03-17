import React from 'react';
import ItemPresenter from './ItemPresenter';

const ItemContainer = ({ img, company, serial, cost, isNew, id }) => {
  let props = { img, company, serial, cost, isNew, id };
  return <ItemPresenter {...props}></ItemPresenter>;
};

export default ItemContainer;
