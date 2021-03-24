const express = require('express');

const router = express.Router();

const Product = require('../models/product');

router.get('/brand/:brandname', async (req, res, next) => {
  const products = await Product.findAll({ where: { brand: req.params.brandname }, limit: 4, order: [['created_at', 'DESC']] });
  res.send(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await Product.findOne({ where: { id: req.params.id } });
  res.send(product);
});

module.exports = router;
