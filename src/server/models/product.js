const Sequelize = require('sequelize');
const Seqeulize = require('sequelize');

module.exports = class Product extends Seqeulize.Model {
  static init(sequelize) {
    return super.init(
      {
        serial: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        company: {
          type: Seqeulize.STRING(20),
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
          defaultValue: Seqeulize.NOW,
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
  static associate(db) {}
};
