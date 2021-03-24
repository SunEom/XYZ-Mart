import React, { useEffect, useState } from 'react';
import SwiperPresenter from './SwiperPresenter';
import axios from 'axios';
const SwiperContainer = () => {
  const [newShoes, setNewShoes] = useState([]);

  const getShoes = async () => {
    await axios.get(`${process.env.REACT_APP_SERVER_PATH}/product/new`).then(async (result) => {
      await setNewShoes(result.data);
    });
  };

  useEffect(() => {
    getShoes();
  }, []);
  return <SwiperPresenter newShoes={newShoes} />;
};

export default SwiperContainer;
