const { Product } = require('../models');

const productData = [
  {
    product_name: 'E-Web Heavy Repeating Blaster',
    price: 14004.99,
    Description: "The E-Web or Emplacement Weapon is heavy repeating blaster manufactured by BlasTech Industries. It was one of the most powerful repeating blasters in the Imperial arsenal",
    Filename: 'E-WEB heavy repeating Blaster.jpg',
  },
  {
    product_name: 'Flechette Launcher',
    price: 9000.00,
    Description: "Golan Arms's FC-1 flechette launcher, in excellent condition. Extra flechettes included",
    Filename: 'Flechette Launcher.jpg',
  },
  {
    product_name: 'Fusion Cutter',
    price: 2200.99,
    Description: "SoroSuub F-187 fusion cutter, with an adjustable cutting beam, allowing the user fine, precise work." ,
    Filename: 'Fusion Cutter.jpg' ,
  },
  {
    product_name: 'StormTrooper Helmet',
    price: 1200.99,
    Description: "Torn from the head of a fallen elite Stormtrooper, this helmet is in perfect condition.",
    Filename: 'Storm Trooper Helmet.jpg,'
  },
  {
    product_name: 'Mandalorean Helmet',
    price: 4529.99,
    Description:'Most iconic of the Mandalorian armor, this T-shaped visor helmet is made of beskar, one of the strongest metals in the universe',
    Filename: 'Mandalorean Helmet.jpg',
  },
  {
    product_name: 'Hunter Droid',
    price: 14400.99,
    Description_name: 'A one-of-a-kind Imperial hunter droid, your very own assasin droid, for a price',
    filename: 'hunter droid.jpg',
  },
  {
    product_name: 'interrogation Droid',
    price: 9000.0,
    Description: 'This Interrogator Droids does not only coax sensitive information out of an individual by inflicting extreme pain, but uses mind probes to torture their victims.',
    Filename:'Interrogation Droid.jpg',
  },
  {
    product_name: 'Light Saber',
    price: 5500.99,
    Description: 'An elegant weapon for a more civilized age, inherited by a true Jedi Master.' ,
    Filename:'light saber.jpg',
  },
  {
    product_name: 'Millenium Falcom',
    price: 120000.99,
    Description:'Despite the worn-out and shabby exterior, The Falcon is one of the fastest vessels in the universe',
    Filename:'Millennium Falcon.jpg',
  },
  {
    product_name: 'Jedi Boots',
    price: 29.99,
    Description:'Tall, sturdy and supple, with good grip, these boots are a must have for any self-respecting Jedi. Obi Wan approved.',
    Filename:'Boots.jpg',
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;