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

  const orderItem = async (e) => {
    e.preventDefault();
    if (e.target.innerText === '일반배송 선택상품 주문하기' && selectedItems.length === 0) return window.alert('상품을 선택해주세요');
    const answer = window.confirm('정말로 구매하시겠습니까 ?');
    if (answer) {
      let list;
      if (e.target.innerText === '바로구매') {
        list = await cart.filter((i) => i.id === +e.target.querySelector('input').value);
      } else if (e.target.innerText === '일반배송 선택상품 주문하기') {
        list = selectedItems;
      } else if (e.target.innerText === '일반배송 전체상품 주문하기') {
        list = cart;
      }
      for (let i of list) {
        // 구매 요청
        await axios
          .post(
            `${process.env.REACT_APP_SERVER_PATH}/product/order`,
            { items: [i], product: i.product, point: (i.product_info.cost * (1 - i.product_info.sale)) / 100 },
            { withCredentials: true }
          )
          .then(async (result) => {
            store.dispatch({ type: 'USER_UPDATED', user: result.data });
            // 구매한 상품 장바구니에서 삭제 요청
            await axios
              .post(`${process.env.REACT_APP_SERVER_PATH}/product/cart/items`, { items: list }, { withCredentials: true })
              .then(async (result2) => {
                await store.dispatch({ type: 'CART_UPDATED', cart: result2.data });
                setCart(store.getState().cart);
                setSelectedItems([]);
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      }
      window.alert('구매 완료하였습니다!');
    }
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
      orderItem={orderItem}
    />
  );
};

export default CartContainer;
