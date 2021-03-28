const Sequelize = require('sequelize');

module.exports = class Cart extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        product: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        size: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'CARTS',
        tableName: 'carts',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  static associate(db) {}
};
