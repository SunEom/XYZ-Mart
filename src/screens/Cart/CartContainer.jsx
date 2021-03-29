import React, { useState } from 'react';
import CartPresenter from './CartPresenter';
import store from '../../store';
import { useHistory } from 'react-router';
import axios from 'axios';
const CartContainer = () => {
  const [cart, setCart] = useState(store.getState().cart);
  const history = useHistory();
  const [selectedItems, setSelectedItems] = useState([]);

  const onChange = (e) => {
    return e.target.checked;
  };

  const requestDelete = async (e) => {
    e.preventDefault();
    await axios
      .delete(`${process.env.REACT_APP_SERVER_PATH}/product/cart/item/${e.target.id.value}`, { withCredentials: true })
      .then(async (result) => {
        await store.dispatch({ type: 'CART_UPDATED', cart: result.data });
        setCart(store.getState().cart);
        setSelectedItems(selectedItems.filter((a) => console.log(a.id, e.target.id.value)));
      })
      .catch((err) => console.error(err));
  };

  const requestDeleteSelected = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_SERVER_PATH}/product/cart/items`, { items: selectedItems }, { withCredentials: true })
      .then(async (result) => {
        await store.dispatch({ type: 'CART_UPDATED', cart: result.data });
        setCart(store.getState().cart);
        setSelectedItems([]);
      })
      .catch((err) => console.error(err));
  };

  if (!store.getState().user) history.push({ pathname: '/login' });
  return (
    <CartPresenter
      cart={cart}
      onChange={onChange}
      selectedItems={selectedItems}
      setSelectedItems={setSelectedItems}
      requestDelete={requestDelete}
      requestDeleteSelected={requestDeleteSelected}
    />
  );
};

export default CartContainer;
