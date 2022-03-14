const { Product } = require('../models');

const productData = [
  {
    product_name: 'E-Web Heavy Repeating Blaster',
    price: 14004.99,
    Description: "The E-Web or Emplacement Weapon is heavy repeating blaster manufactured by BlasTech Industries. It was one of the most powerful repeating blasters in the Imperial arsenal"
    Filename: .\images\E-WEB heavy repeating Blaster.jpg,
  },
  {
    product_name: 'Flechette Launcher',
    price: 9000.00,
    Description: "Golan Arms's FC-1 flechette launcher, in excellent condition. Extra flechettes included",
    Filename: public\images\Flechette Launcher.jpg,
  },
  {
    product_name: 'Fusion Cutter',
    price: 2200.99,
    Description: "SoroSuub F-187 fusion cutter, with an adjustable cutting beam, allowing the user fine, precise work." ,
    Filename:.images\Fusion Cutter.jpg ,
  },
  {
    product_name: 'StormTrooper Helmet',
    price: 1200.99,
    Description: "Torn from the head of a fallen elite Stormtrooper, this helmet is in perfect condition.",
    Filename: ''.\images\Storm Trooper Helmet.jpg,'
  },
  {
    product_name: 'Mandalorean Helmet',
    price: 4529.99,
    Description:'Most iconic of the Mandalorian armor, this T-shaped visor helmet is made of beskar, one of the strongest metals in the universe',
    Filename: Mandalorian Helmet.webp,
  },
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    Description_name: 14,
    filename: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    Description:,
    Filename:,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    Description:,
    Filename:,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    Description:,
    Filename:,,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    Description:,
    Filename:,,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;