const router = require("express").Router();
const { AddToCart } = require("../../models");
const Auth = require("../../utils/auth");


router.get("/", Auth, async (req, res) => {
    try {
      const cartData = await AddToCart.findAll();
      const cartItems = cartData.map((item) => item.get({ plain: true }));
      res.render("addToCart", {
        cartItems
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });