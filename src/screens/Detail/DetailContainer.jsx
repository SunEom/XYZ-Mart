import React, { useEffect, useState } from 'react';
import DetailPresenter from './DetailPresenter';
import axios from 'axios';
const DetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const getProduct = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/product/1`)
      .then((result) => {
        setProduct(result.data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getProduct();
    setLoading(false);
  }, []);
  return <DetailPresenter product={product} loading={loading} />;
};

export default DetailContainer;
