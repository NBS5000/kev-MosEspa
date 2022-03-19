const router = require("express").Router();
const { AddToCart } = require("../../models");
const Auth = require("../../utils/auth");


router.get("/", Auth, async (req, res) => {
    try {
      const cartData = await AddToCart.findAll();
      const cartItems = cartData.map((item) => item.get({ plain: true }));
      res.render("cart", {
        cartItems
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


  router.post('/:id', async (req, res) => {
    console.log(req.params.id);
    try {
      const cartData = await AddToCart.create({
        product_id: req.params.id,
        user_id: req.session.user_id,
      });
      console.log(cartData);
      // sending a response
      res.status(200).json(cartData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports = router;