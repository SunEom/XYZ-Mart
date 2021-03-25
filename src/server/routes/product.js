const express = require('express');
const Op = require('sequelize').Op;
const router = express.Router();

const Product = require('../models/product');

router.get('/new', async (req, res, next) => {
  const products = await Product.findAll({ limit: 8, order: [['created_at', 'DESC']] });
  res.send(products);
});

router.get('/brand/:brandname', async (req, res, next) => {
  const products = await Product.findAll({ where: { brand: req.params.brandname }, limit: 4, order: [['created_at', 'DESC']] });
  res.send(products);
});

router.get('/category/:categoryname', async (req, res, next) => {
  let searchFor = [`%${req.params.categoryname}%`];

  // basically turning the items into objects with "$iLike" as the key
  searchFor = searchFor.map((item) => {
    return { $iLike: item };
  });
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
