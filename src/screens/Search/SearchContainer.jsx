import React, { useEffect, useState } from 'react';
import SearchPresenter from './SearchPresenter';
import axios from 'axios';
import { useParams } from 'react-router';
const SearchContainer = () => {
  const [result, setResult] = useState([]);
  const keyword = useParams().keyword;
  const [loading, setLoading] = useState(true);

  const onChange = (e) => {
    if (e.value === 'new') {
      let temp = [...result];
      temp.sort((a, b) => (new Date(a.created_at) > new Date(b.created_at) ? -1 : 1));
      setResult(temp);
    } else if (e.value === 'best') {
      let temp = [...result];
      temp.sort((a, b) => b.order_count - a.order_count);
      setResult(temp);
    } else if (e.value === 'lowcost') {
      let temp = [...result];
      temp.sort((a, b) => a.cost - b.cost);
      setResult(temp);
    } else if (e.value === 'highcost') {
      let temp = [...result];
      temp.sort((a, b) => b.cost - a.cost);
      setResult(temp);
    }
  };

  const sortOptions = [
    { value: 'new', label: '신상품순' },
    { value: 'best', label: '베스트상품순' },
    { value: 'lowcost', label: '낮은가격순' },
    { value: 'highcost', label: '높은가격순' },
  ];

  const props = { result, keyword, sortOptions, onChange, loading };
  const getResult = async () => {
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/product/category/${keyword}`)
      .then(async (result) => {
        setResult(result.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => getResult(), [useParams().keyword]);
  return <SearchPresenter {...props} />;
};

export default SearchContainer;
