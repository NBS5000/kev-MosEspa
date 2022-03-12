const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
    Description_name: '',
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
    Description_name: '',
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
    Description_name: '',
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
    Description_name: '',
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
    Description_name: '',
  },


































































  {
    product_name: 'Boba Fett',
    price: 14.99,
    stock: 14,
    category_id: 4,
    Description_name: 'Star Wars: The Book of Boba Fett tv series poster',
  },
  {
    product_name: 'The Mandalorian',
    price: 14.99,
    stock: 25,
    category_id: 4,
    Description_name: 'Star Wars: The Mandalorian movie poster',
  },
  {
    product_name: 'The Force Awakens',
    price: 22.99,
    stock: 12,
    category_id: 4,
    Description_name: 'Star Wars VII: The Force Awakens movie poster',
    
  },
  {
    product_name: 'The Last Jedi',
    price: 12.99,
    stock: 50,
    category_id: 4,
    Description_name: 'Star Wars VII: The Last Jedi movie poster',
  },
  {
    product_name: 'Rise of the Skywalker',
    price: 29.99,
    stock: 22,
    category_id: 4,
    Description_name: 'Star Wars IX: The Rise of the Skywalker movie poster',
  },
  {
    product_name: 'Luke',
    price: 19.99,
    stock: 14,
    category_id: 4,
    Description_name: 'Funko Star Wars - Luke Skywalker Retro Pop! Vinyl Figure',
  },
  {
    product_name: 'Leah',
    price: 19.99,
    stock: 25,
    category_id: 5,
    Description_name: 'Funko Star Wars - Princess Leia Pop! Vinyl Bobble Head Figure',
  },
  {
    product_name: 'Chewbacca',
    price: 22.99,
    stock: 12,
    category_id: 5,
    Description_name: 'Funko Star Wars - Ep8 Chewbacca with Porg Bobble Pop! Vinyl Figure',
  },
  {
    product_name: 'Han Solo',
    price: 12.99,
    stock: 50,
    category_id: 5,
    Description_name: 'Funko Star Wars: Solo - Han Solo with Jacket Pop! Vinyl Figure',
  },
  {
    product_name: 'Darth Vader',
    price: 29.99,
    stock: 22,
    category_id: 5,
    Description_name: 'Funko Star Wars - Darth Vader Retro Pop! Vinyl Figure',
  },
  {
    product_name: 'Baby Yoda',
    price: 24.99,
    stock: 14,
    category_id: 6,
    Description_name: 'The 50-year-old Yoda species in the form of an adorable 21cm plush toy'
  },
  {
    product_name: 'C3PO',
    price: 29.99,
    stock: 25,
    category_id: 6,
    Description_name: 'The famous protocol droid as a cuddly 20cm plush toy',
  },
  {
    product_name: 'Storm Trooper',
    price: 22.99,
    stock: 12,
    category_id: 6,
    Description_name: 'Officially licensed Star Wars collectible: The force is strong with this 21cm plush!',
  },
  {
    product_name: 'Ewok',
    price: 19.99,
    stock: 50,
    category_id: 6,
    Description_name: 'Extraterrestrial Teddy! Cuddle-up with the primitive pleasures of our soft, shaggy Wicket 30 plush. ',
  },
  {
    product_name: 'BB-8',
    price: 29.99,
    stock: 22,
    category_id: 6,
    Description_name: 'Soft 15cm BB-8 plush toy in a silky print fabric, two plush antennas and a fully rotational topper make this droid functionally fun',
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;