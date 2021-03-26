const express = require('express');
const Op = require('sequelize').Op;
const router = express.Router();

const Product = require('../models/product');

router.get('/new', async (req, res, next) => {
  const products = await Product.findAll({ limit: 8, order: [['created_at', 'DESC']] });
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
  const products = await Product.findAll({ where: { brand: req.params.brandname }, limit: 4, order: [['created_at', 'DESC']] });
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

router.get('/:id', async (req, res, next) => {
  const product = await Product.findOne({ where: { id: req.params.id } });
  res.send(product);
});

module.exports = router;
