const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'T-Shirts',
  },
  {
    category_name: 'Films',
  },
  {
    category_name: 'Lego',
  },
  {
    category_name: 'Posters',
  },
  {
    category_name: 'Figurines',
  },
  {
    category_name: 'Plushies',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;