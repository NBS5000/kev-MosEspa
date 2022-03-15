const { Product } = require('../models');

const productData = [
  {
    name: 'E-Web Heavy Repeating Blaster',
    image_link: 'E-WEB heavy repeating Blaster.jpg',
    price: 14004.99,
    description: "The E-Web or Emplacement Weapon is heavy repeating blaster manufactured by BlasTech Industries. It was one of the most powerful repeating blasters in the Imperial arsenal",
    user_id: 1,

  },
  {
    name: 'Flechette Launcher',
    image_link: 'Flechette Launcher.jpg',
    price: 9000.00,
    description: "Golan Arms's FC-1 flechette launcher, in excellent condition. Extra flechettes included",
    user_id: 1,
    
  },
  {
    name: 'Fusion Cutter',
    image_link: 'Fusion Cutter.jpg' ,
    price: 2200.99,
    description: "SoroSuub F-187 fusion cutter, with an adjustable cutting beam, allowing the user fine, precise work." ,
    user_id: 1,
  },
  {
    name: 'StormTrooper Helmet', 
    image_link: 'Storm Trooper Helmet.jpg,',
    price: 1200.99,
    description: "Torn from the head of a fallen elite Stormtrooper, this helmet is in perfect condition.",
    user_id: 1,
  },
  {
    name: 'Mandalorean Helmet',
    image_link: 'Mandalorean Helmet.jpg',
    price: 4529.99,   
    description:'Most iconic of the Mandalorian armor, this T-shaped visor helmet is made of beskar, one of the strongest metals in the universe',
        user_id: 1,
  },
  {
    name: 'Hunter Droid',
    image_link: 'hunter droid.jpg',
    price: 14400.99,
    description_name: 'A one-of-a-kind Imperial hunter droid, your very own assasin droid, for a price',
    user_id: 1,
  },
  {
    name: 'interrogation Droid',
    image_link:'Interrogation Droid.jpg',
    price: 9000.0,
    description: 'This Interrogator Droids does not only coax sensitive information out of an individual by inflicting extreme pain, but uses mind probes to torture their victims.',
    user_id: 1,
  },
  {
    name: 'Light Saber',
    image_link:'light saber.jpg',
    price: 5500.99,
    description: 'An elegant weapon for a more civilized age, inherited by a true Jedi Master.' ,
    user_id: 1,
  },
  {
    name: 'Millenium Falcom',
    image_link:'Millennium Falcon.jpg',
    price: 120000.99,
    description:'Despite the worn-out and shabby exterior, The Falcon is one of the fastest vessels in the universe',
    user_id: 1,
  },
  {
    name: 'Jedi Boots',
    image_link:'Boots.jpg',
    price: 29.99,
    description:'Tall, sturdy and supple, with good grip, these boots are a must have for any self-respecting Jedi. Obi Wan approved.',
    user_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;