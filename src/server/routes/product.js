const express = require('express');

const router = express.Router();

const Product = require('../models/product');
router.get('/:id', async (req, res, next) => {
  console.log(req.params.id);
  const product = await Product.findOne({ id: req.params.id });
  res.send(product);
});

module.exports = router;
