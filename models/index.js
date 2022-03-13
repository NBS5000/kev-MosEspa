const User = require('./User');
const Product = require('./Product');

User.hasMany(Product, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

Product.belongsTo(User, {
  foreignKey: 'id'
});

module.exports = { User, Product };