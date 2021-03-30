import React, { useEffect, useState } from 'react';
import MyPagePresenter from './MyPagePresenter';
import store from '../../store';
import { useHistory } from 'react-router';
import axios from 'axios';

const MyPageContainer = () => {
  const history = useHistory();
  const user = store.getState().user;
  const [myOrder, setMyOrder] = useState([]);
  const getMyOrder = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/product/order`, { withCredentials: true })
      .then((result) => setMyOrder(result.data))
      .catch((err) => console.log(err));
  };

  if (!user) {
    history.push({ pathname: '/login' });
  }

  useEffect(() => {
    getMyOrder();
  }, []);
  return <MyPagePresenter user={user} myOrder={myOrder} />;
};

export default MyPageContainer;
