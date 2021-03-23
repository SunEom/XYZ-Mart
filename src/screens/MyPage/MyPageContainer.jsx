import React from 'react';
import MyPagePresenter from './MyPagePresenter';
import store from '../../store';
import { useHistory } from 'react-router';
const MyPageContainer = () => {
  const history = useHistory();
  const user = store.getState().user;
  if (!user) {
    history.push({ pathname: '/' });
  }
  return <MyPagePresenter user={user} />;
};

export default MyPageContainer;
