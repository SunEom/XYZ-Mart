import React, { useEffect, useState } from 'react';
import MyPagePresenter from './MyPagePresenter';
import store from '../../store';
import { useHistory } from 'react-router';
import axios from 'axios';

const MyPageContainer = () => {
  const history = useHistory();
  const [user, setUser] = useState(store.getState().user);
  const [myOrder, setMyOrder] = useState([]);
  const getMyOrder = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/product/order`, { withCredentials: true })
      .then((result) => setMyOrder(result.data))
      .catch((err) => console.error(err));
  };

  const orderState = () => {
    let preparing = myOrder.filter(
      // 주문한지 1일이 지나지 않은 상품
      (a) => new Date(a.created_at.slice(0, 10)) >= minusDays(`${new Date().toISOString().split('T')[0]} 00:00:00`, 1)
    ).length;

    let delivering = myOrder.filter(
      // 주문한지 3일이 지나지 않은 상품
      (a) =>
        new Date(a.created_at.slice(0, 10)) >= minusDays(`${new Date().toISOString().split('T')[0]} 00:00:00`, 3) &&
        new Date(a.created_at.slice(0, 10)) < minusDays(`${new Date().toISOString().split('T')[0]} 00:00:00`, 1)
    ).length;

    let delivered = myOrder.filter(
      // 주문한지 30일이상 지나지 않은 상품
      (a) =>
        new Date(a.created_at.slice(0, 10)) >= minusDays(`${new Date().toISOString().split('T')[0]} 00:00:00`, 30) &&
        new Date(a.created_at.slice(0, 10)) < minusDays(`${new Date().toISOString().split('T')[0]} 00:00:00`, 3)
    ).length;

    return { preparing, delivering, delivered };
  };

  function minusDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  useEffect(() => {
    if (!user) {
      history.push({ pathname: '/login' });
    }
    getMyOrder();
  }, []);
  return <MyPagePresenter user={user} myOrder={myOrder} {...orderState()} />;
};

export default MyPageContainer;
