import React from 'react';
import HeaderPresenter from './HeaderPresenter';
import { useHistory } from 'react-router';
const HeaderContainer = () => {
  const history = useHistory();
  const onSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${e.target.keyword.value}`);
  };
  return <HeaderPresenter onSearch={onSearch} />;
};

export default HeaderContainer;
