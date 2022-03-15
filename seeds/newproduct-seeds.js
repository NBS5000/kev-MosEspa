const { Product } = require('../models');

const productData = [
  {
    name: 'E-Web Heavy Repeating Blaster',
    image_link: 'https://static.wikia.nocookie.net/starwars/images/6/69/EWeb-VI_Ben_Nadler.png/revision/latest?cb=20200831025043',
    price: 14004.99,
    description: "The E-Web or Emplacement Weapon is heavy repeating blaster manufactured by BlasTech Industries. It was one of the most powerful repeating blasters in the Imperial arsenal",
    user_id: 1,

  },
  {
    name: 'Flechette Launcher',
    image_link: 'https://static.wikia.nocookie.net/starwars/images/1/15/FC1-MV.png/revision/latest?cb=20150212033057',
    price: 9000.00,
    description: "Golan Arms's FC-1 flechette launcher, in excellent condition. Extra flechettes included",
    user_id: 1,
    
  },
  {
    name: 'Fusion Cutter',
    image_link: 'https://static.wikia.nocookie.net/starwars/images/1/1f/Fusioncutter_negwt.jpg/revision/latest?cb=20080722200432' ,
    price: 2200.99,
    description: "SoroSuub F-187 fusion cutter, with an adjustable cutting beam, allowing the user fine, precise work." ,
    user_id: 1,
  },
  {
    name: 'StormTrooper Helmet', 
    image_link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRH29ixDsA2HXWqcjY0qyBxAC6hvQUctn2Q&usqp=CAU',
    price: 1200.99,
    description: "Torn from the head of a fallen elite Stormtrooper, this helmet is in perfect condition.",
    user_id: 1,
  },
  {
    name: 'Mandalorean Helmet',
    image_link: 'https://bbts1.azureedge.net/images/p/full/2021/12/11b035b7-721d-4d03-aa96-264b51cf36d7.jpg',
    price: 4529.99,   
    description:'Most iconic of the Mandalorian armor, this T-shaped visor helmet is made of beskar, one of the strongest metals in the universe',
    user_id: 1,
  },
  {
    name: 'Hunter Droid',
    image_link: 'https://static.turbosquid.com/Preview/2020/04/01__12_23_29/02.jpg00FDD212-0C4F-4C07-822B-497CF8BC6CD8Large.jpg',
    price: 14400.99,
    description: 'A one-of-a-kind Imperial hunter droid, your very own assasin droid, for a price',
    user_id: 1,
  },
  {
    name: 'interrogation Droid',
    image_link:'https://live.staticflickr.com/5481/12710892094_848abe9884_b.jpg',
    price: 9000.0,
    description: 'This Interrogator Droids does not only coax sensitive information out of an individual by inflicting extreme pain, but uses mind probes to torture their victims.',
    user_id: 1,
  },
  {
    name: 'Light Saber',
    image_link:'https://ultrasabers.com/wp-content/uploads/2019/09/The-Fallen-Combat-Ready-Emitter-Ignited.jpg',
    price: 5500.99,
    description: 'An elegant weapon for a more civilized age, inherited by a true Jedi Master.' ,
    user_id: 1,
  },
  {
    name: 'Millenium Falcom',
    image_link:'https://www.renderhub.com/squir/star-wars-millennium-falcon/star-wars-millennium-falcon-01.jpg',
    price: 120000.99,
    description:'Despite the worn-out and shabby exterior, The Falcon is one of the fastest vessels in the universe',
    user_id: 1,
  },
  {
    name: 'Jedi Boots',
    image_link:'https://www.jedirobeamerica.com/images/page/Image/Home%20Page/JRA%20HOME/mini-banner-boots.jpg',
    price: 29.99,
    description:'Tall, sturdy and supple, with good grip, these boots are a must have for any self-respecting Jedi. Obi Wan approved.',
    user_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;