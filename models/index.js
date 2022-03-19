const User = require('./User');
const Product = require('./Product');
const AddToCart = require('./AddToCart');

User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

AddToCart.hasMany(Product, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
})

AddToCart.hasMany(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

module.exports = { User, Product, AddToCart };