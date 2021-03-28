import React, { useEffect, useState } from 'react';
import LoginPresenter from './LoginPresenter';
import axios from 'axios';
import store from '../../store';
import { useHistory } from 'react-router';
const LoginContainer = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const onChange = (e) => {
    if (e.target.name === 'id') {
      setId(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  useEffect(() => {
    if (store.getState().user) {
      history.push({
        pathname: '/',
      });
    }
  }, [history]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_SERVER_PATH}/auth/login`, { id, password }, { withCredentials: true })
      .then(async (result) => {
        const user = result.data;
        await store.dispatch({ type: 'LOGIN', user: { ...result.data } });
        axios
          .get(`${process.env.REACT_APP_SERVER_PATH}/product/cart/${user.id}`, { withCredentials: true })
          .then(async (cart) => {
            await store.dispatch({ type: 'CART_UPDATED', cart: cart.data });
            history.push({ pathname: '/' });
          })
          .catch((error) => console.error(error));
      })
      .catch((err) => console.error(err.response));
  };
  return <LoginPresenter id={id} password={password} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginContainer;
