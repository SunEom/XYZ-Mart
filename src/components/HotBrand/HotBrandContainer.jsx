import React, { useEffect, useState } from 'react';
import HotBrandPresenter from './HotBrandPresenter';
import axios from 'axios';
const HotBrandContainer = ({ bgImgList }) => {
  const [nikeShoes, setNikeShoes] = useState([]);
  const [vansShoes, setVansShoes] = useState([]);
  const [newBalanceShoes, setNewBalanceShoes] = useState([]);
  const props = { bgImgList, nikeShoes, vansShoes, newBalanceShoes };
  props.bgImgList = [
    {
      com: 'Nike',
      src:
        'https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&h=700&q=100',
    },
    {
      com: 'VANS',
      src:
        'https://images.unsplash.com/photo-1456894332557-b03dc5cf60d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&h=700&q=80',
    },
    {
      com: 'New Balance',
      src:
        'https://images.unsplash.com/photo-1554133203-0018b2cf0d77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80',
    },
  ];

  const getShoes = async () => {
    await axios.get(`${process.env.REACT_APP_SERVER_PATH}/product/brand/nike`).then(async (result) => {
      await setNikeShoes(result.data);
      axios.get(`${process.env.REACT_APP_SERVER_PATH}/product/brand/vans`).then(async (result) => {
        await setVansShoes(result.data);
        axios.get(`${process.env.REACT_APP_SERVER_PATH}/product/brand/newbalance`).then(async (result) => {
          await setNewBalanceShoes(result.data);
        });
      });
    });
  };

  useEffect(() => {
    getShoes();
  }, []);
  return <HotBrandPresenter {...props} />;
};

export default HotBrandContainer;
