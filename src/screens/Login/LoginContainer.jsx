import React, { useState } from 'react';
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

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${process.env.REACT_APP_SERVER_PATH}/auth/login`, { id, password }, { withCredentials: true })
      .then(async (result) => {
        console.log(result);
        await store.dispatch({ type: 'LOGIN', user: { ...result.data } });
        history.push({ pathname: '/' });
      })
      .catch((err) => console.error(err.response));
  };
  return <LoginPresenter id={id} password={password} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginContainer;
