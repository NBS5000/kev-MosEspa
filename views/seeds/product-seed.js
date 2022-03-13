const { Product } = require('../models');

const productData = [
  {
    product_name: 'Girls Easter themed T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
    Description_name: "Girl's Star Wars Stormtroopers Are Ready To Hunt Eggs On Easter T-Shirt",
  },
  {
    product_name: "Women's Tank top",
    price: 29.99,
    stock: 25,
    category_id: 1,
    Description_name: "Women's Star Wars Cute Cartoon R2-D2 Racerback Tank Top",
  },
  {
    product_name: "Men's Tank Top",
    price: 22.99,
    stock: 12,
    category_id: 1,
    Description_name: "Men's Star Wars Stormtrooper Starry Night Tank Top",
  },
  {
    product_name: "Boy's T-Shirt",
    price: 12.99,
    stock: 50,
    category_id: 1,
    Description_name: "Boys' Star Wars graphic tee features cartoon images of an array of characters",
  },
  {
    product_name: "Men's T-Shirt",
    price: 29.99,
    stock: 22,
    category_id: 1,
    Description_name: "Millenium Falcon 77 Short Sleeve T-Shirt Dark Grey",
  },

  {
    product_name: 'Star Wars: Episode IV',
    price: 14.99,
    stock: 14,
    category_id: 2,
    Description_name: 'Star Wars: A New Hope (Episode IV), 1977',
  },
  {
    product_name: 'Star Wars: Episode V',
    price: 14.99,
    stock: 25,
    category_id: 2,
    Description_name: 'Star Wars: The Empire Strikes Back (Episode V), 1980',
  },
  {
    product_name: 'Star Wars: Episode VI',
    price: 22.99,
    stock: 12,
    category_id: 2,
    Description_name: 'Star Wars: Return of the Jedi (Episode VI), 1983',
    
  },
  {
    product_name: 'Star Wars: Episode I',
    price: 12.99,
    stock: 50,
    category_id: 2,
    Description_name: 'Star Wars: The Phantom Menace (Episode I), 1999',
  },
  {
    product_name: 'Star Wars: Episode II',
    price: 29.99,
    stock: 22,
    category_id: 2,
    Description_name: 'Star Wars: Attack of the Clones (Episode II), 2002',
  },
  {
    product_name: "Boba Fett's Throne Room",
    price: 49.99,
    stock: 14,
    category_id: 3,
    Description_name: 'The Book of Boba Fett fans can recreate authentic details of the throne room and other parts of Jabba the Hutt’s palace.',
  },
  {
    product_name: 'Dark Trooper Helmet',
    price: 54.99,
    stock: 14,
    category_id: 3,
    Description_name: 'A hands-on project to build a LEGO Star Wars version of a Dark Trooper Helmet with authentic details.',
  },
  {
    product_name: 'AT-AT',
    price: 244.99,
    stock: 1,
    category_id: 3,
    Description_name: 'Relive the Battle of Hoth and other classic Star Wars trilogy scenes with this AT-AT (75288) LEGO building kit for kids! Different sections of the All Terrain Armored Transport vehicle open up for easy play, and it has spring-loaded shooters, plus a speeder bike inside.',
  },
  {
    product_name: 'Millennium Falcon',
    price: 362.99,
    stock: 1,
    category_id: 3,
    Description_name: 'Defend the Galaxy and build the largest LEGO Star Wars Millennium Falcon to date! Perfect for adult Star Wars fans and expert builders, and can be displayed as a collectible toy model',
    
  },
  {
    product_name: 'Imperial Star Destroyer',
    price: 312.99,
    stock: 1,
    category_id: 3,
    Description_name: "The Devastator; a giant of a model from Star Wars: A New Hope that collectors will love to own! The Imperial Star Destroyer model includes a display stand, informational fact plaque and 2 Imperial minifigures with weapons for a truly authentic galactic civil war collector's item",
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
    






















































  