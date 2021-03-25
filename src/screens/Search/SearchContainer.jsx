import React, { useState } from 'react';
import SearchPresenter from './SearchPresenter';
import axios from 'axios';

const SearchContainer = () => {
  const [result, setResult] = useState([]);
  const [keyword, setKeyword] = useState('');
  const props = { result };
  const onSubmit = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/product/category/${keyword}`)
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  };
  return <SearchPresenter {...props} />;
};

export default SearchContainer;
