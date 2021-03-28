import HeaderPresenter from './HeaderPresenter';
import store from '../../store';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const HeaderContainer = () => {
  const [user, setUser] = useState(store.getState().user);
  const [cart, setCart] = useState(store.getState().cart);
  const sUser = () => setUser(store.getState().user);
  const sCart = () => setCart(store.getState().cart);
  const history = useHistory();

  const onLogout = async (e) => {
    e.preventDefault();
    await axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/auth/logout`, { withCredentials: true })
      .then((result) => {
        store.dispatch({ type: 'LOGOUT' });
      })
      .catch((err) => console.error(err));
  };

  const onSearch = (e) => {
    e.preventDefault();
    history.push({
      pathname: `/search/${e.target.querySelector('input').value}`,
    });
  };

  useEffect(() => {
    sUser();
    sCart();
  }, []);

  store.subscribe(sUser);
  store.subscribe(sCart);

  return <HeaderPresenter user={user} onLogout={onLogout} onSearch={onSearch} cart={cart} />;
};
export default HeaderContainer;
