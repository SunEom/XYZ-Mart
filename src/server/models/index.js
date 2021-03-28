const Sequelize = require('sequelize');
const User = require('./user');
const Product = require('./product');
const Order = require('./order');
const Cart = require('./cart');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Product = Product;
db.Order = Order;
db.Cart = Cart;

User.init(sequelize);
Product.init(sequelize);
Order.init(sequelize);
Cart.init(sequelize);

User.associate(db);
Product.associate(db);
Order.associate(db);
Cart.associate(db);

module.exports = db;
