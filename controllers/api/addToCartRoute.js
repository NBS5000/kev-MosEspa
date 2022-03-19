const router = require("express").Router();
const { AddToCart, Product, User } = require("../../models");
const Auth = require("../../utils/auth");


router.get("/", Auth, async (req, res) => {
    try {
      const cartData = await AddToCart.findAll({
        where: {
          user_id: req.session.user_id,
        }
      });
      const cartItems = cartData.map((item) => item.get({ plain: true }));
      console.log("test: 1");
      const cost = function() {
          const len = cartItems.length;
          var loop = 0;
          var c = 0;
          while (loop < len){
            var x = parseFloat(cartItems[loop].product_price);
            c = c + x;
            loop++;
            console.log(x);
          }
          return c;
      }
      console.log("test: ", cost);
      res.render("cart", {
        cartItems,
        cost
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


  router.post('/:id', async (req, res) => {
    try {
      const item = await Product.findByPk(req.params.id);

      const cartData = await AddToCart.create({
        product_id: req.params.id,
        user_id: req.session.user_id,
        product_name: item.name,
        product_price: item.price
      });
      // sending a response
      res.status(200).json(cartData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;