const router = require("express").Router();
const Auth = require("../utils/auth");
const { User, Products } = require("../models");
// home route needs to fetch the products and display them
// have access to login and a carts page and a profile/my listing page

router.get("/", async (req, res) => {
  try {
  //   const productData = await Products.findAll({
  //     include: [
  //       {
  //         model: User,
  //         attributes: ["name"],
  //       },
  //     ],
  //   });
  //   const product = productData.map((product) => product.get({ plain: true }));
    res.render("homepage")//, {
      // product,
    // });
  } catch (err) {
    res.status(400).json(err);
  }
});


// finding a product by its name 

router.get("/product/:name", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.name, {
      include: [
        {
          model: User,
          attributes: ["userName"],
        },
      ],
    });

    const product = productData.get({ plain: true });
    res.render("product", { product });
  } catch (err) {
    res.status(400).json(err);
  }
});

// accessing login page from home route
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/homepage");
    return;
  }

  res.render("login");
});

module.exports = router;
