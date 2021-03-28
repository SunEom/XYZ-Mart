import React, { useState } from 'react';
import CartPresenter from './CartPresenter';
import store from '../../store';
import { useHistory } from 'react-router';
const CartContainer = () => {
  const cart = store.getState().cart;
  const history = useHistory();
  const [selectedItems, setSelectedItems] = useState([]);

  const onChange = (e) => {
    return e.target.checked;
  };
  if (!store.getState().user) history.push({ pathname: '/login' });
  return <CartPresenter cart={cart} onChange={onChange} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />;
};

export default CartContainer;
