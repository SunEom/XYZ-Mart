import React from 'react';
import ItemPresenter from './ItemPresenter';

const ItemContainer = ({ img, brand, serial, cost, isNew, id }) => {
  let props = { img, brand, serial, cost, isNew, id };
  return <ItemPresenter {...props}></ItemPresenter>;
};

export default ItemContainer;
