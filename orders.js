const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Customer = sequelize.define('Customer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

const Order = sequelize.define('Order', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

Customer.hasMany(Order, { onDelete: 'CASCADE' });
Order.belongsTo(Customer);

module.exports = {
  Customer,
  Order,
};
