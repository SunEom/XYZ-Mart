import React, { useEffect, useState } from 'react';
import DetailPresenter from './DetailPresenter';
import { useParams, useHistory } from 'react-router';
import axios from 'axios';
const DetailContainer = () => {
  const params = useParams();
  const history = useHistory();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER_PATH}/product/${params.id}`)
      .then((result) => {
        setProduct(result.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getProduct();
  }, []);
  return <DetailPresenter product={product} loading={loading} history={history} />;
};

export default DetailContainer;
