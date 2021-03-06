const express = require('express');
const Op = require('sequelize').Op;
const router = express.Router();
const sequelize = require('sequelize');

const User = require('../models/user');
const Product = require('../models/product');
const Order = require('../models/order');
const Cart = require('../models/cart');

router.get('/new', async (req, res, next) => {
  const products = await Product.findAll({ where: { for_kids: false }, limit: 8, order: [['created_at', 'DESC']] });
  res.send(products);
});

router.get('/category/kids', async (req, res, next) => {
  const products = await Product.findAll({ where: { for_kids: true }, order: [['created_at', 'DESC']] });
  res.send(products);
});

router.get('/category/sale', async (req, res, next) => {
  const products = await Product.findAll({ where: { sale: { [Op.gt]: 0 } }, order: [['created_at', 'DESC']] });
  res.send(products);
});

router.get('/category/best', async (req, res, next) => {
  const products = await Product.findAll({ order: [['order_count', 'DESC']] });
  res.send(products);
});

router.get('/brand/:brandname', async (req, res, next) => {
  const products = await Product.findAll({
    where: { [Op.and]: [{ brand: req.params.brandname }, { for_kids: false }] },
    limit: 4,
    order: [['created_at', 'DESC']],
  });
  res.send(products);
});

router.get('/gender/:gender', async (req, res, next) => {
  const products = await Product.findAll({
    where: {
      [Op.or]: [{ gender: 'all' }, { gender: `${req.params.gender}` }],
    },
    order: [['created_at', 'DESC']],
  });

  res.send(products);
});

router.get('/category/:categoryname', async (req, res, next) => {
  const products = await Product.findAll({
    where: {
      [Op.or]: [
        { brand_kor: { [Op.like]: `%${req.params.categoryname}%` } },
        { brand: { [Op.like]: `%${req.params.categoryname}%` } },
        { type: { [Op.like]: `%${req.params.categoryname}%` } },
      ],
    },
    order: [['created_at', 'DESC']],
  });

  res.send(products);
});

// About CART

router.post('/cart', async (req, res, next) => {
  const user = req.body.user;
  const product = req.body.product;
  const product_id = req.body.product_id;

  for (let item of product) {
    await Cart.create({
      user,
      product: product_id,
      size: item.size,
      quantity: item.number,
    });
  }

  const result = await Cart.findAll({
    where: { user },
  });
  for (let i = 0; i < result.length; i++) {
    const p = await Product.findOne({ where: { id: result[i].product } });
    console.log(p);
    result[i] = { ...result[i].dataValues, product_info: p.dataValues };
  }
  res.send(result);
});

router.get('/cart/:id', async (req, res, next) => {
  const result = await Cart.findAll({
    where: { user: req.params.id },
    order: [['created_at', 'DESC']],
  });
  for (let i = 0; i < result.length; i++) {
    const p = await Product.findOne({ where: { id: result[i].product } });
    console.log(p);
    result[i] = { ...result[i].dataValues, product_info: p.dataValues };
  }
  res.send(result);
});

router.delete('/cart/item/:id', async (req, res, next) => {
  const id = req.params.id;
  await Cart.destroy({ where: { id, user: req.user.id } });

  const result = await Cart.findAll({ where: { user: req.user.id }, order: [['created_at', 'DESC']] });
  for (let i = 0; i < result.length; i++) {
    const p = await Product.findOne({ where: { id: result[i].product } });
    console.log(p);
    result[i] = { ...result[i].dataValues, product_info: p.dataValues };
  }
  res.send(result);
});

router.post('/cart/items', async (req, res, next) => {
  const items = req.body.items;
  for (let item of items) await Cart.destroy({ where: { id: item.id, user: req.user.id } });
  const result = await Cart.findAll({ where: { user: req.user.id }, order: [['created_at', 'DESC']] });
  for (let i = 0; i < result.length; i++) {
    const p = await Product.findOne({ where: { id: result[i].product } });
    console.log(p);
    result[i] = { ...result[i].dataValues, product_info: p.dataValues };
  }
  res.send(result);
});

// About ORDER

router.post('/order', async (req, res, next) => {
  const { items, product, point } = req.body;
  const exUser = await User.findOne({ where: { id: req.user.id } });
  for (let item of items) {
    await Order.create({
      user: req.user.id,
      product,
      size: item.size,
      quantity: item.number || item.quantity,
    });

    await Product.update({ order_count: sequelize.literal('order_count + 1') }, { where: { id: product } });
  }

  await User.update({ point: exUser.point + point * items.length }, { where: { id: req.user.id } });
  const user = await User.findOne({ where: { id: req.user.id } });
  res.send(user);
});

router.get('/order', async (req, res, next) => {
  if (!req.user) {
    return res.status(400).send('Not login');
  }
  const result = await Order.findAll({ where: { user: req.user.id }, order: [['created_at', 'DESC']] });
  for (let i = 0; i < result.length; i++) {
    const p = await Product.findOne({ where: { id: result[i].product } });
    console.log(p);
    result[i] = { ...result[i].dataValues, product_info: p.dataValues };
  }
  res.send(result);
});

router.get('/:id', async (req, res, next) => {
  const product = await Product.findOne({ where: { id: req.params.id } });
  res.send(product);
});

module.exports = router;
