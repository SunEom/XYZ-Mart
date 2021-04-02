const Sequelize = require('sequelize');

module.exports = class Product extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        serial: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        brand: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        cost: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        color: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        img: {
          type: Sequelize.STRING(300),
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        type: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        stylecode: {
          type: Sequelize.STRING(8),
          allowNull: false,
        },
        code: {
          type: Sequelize.STRING(8),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        sale: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        brand_kor: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        order_count: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
        gender: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        for_kids: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'PRODUCTS',
        tableName: 'products',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  static associate(db) {
    db.Product.belongsToMany(db.Order, { through: 'Order' });
    db.Product.belongsToMany(db.Cart, { through: 'Cart' });
  }
};
