const router = require("express").Router();
const { Product } = require("../../models");
const { User } = require("../../models");
const Auth = require("../../utils/auth");

router.get("/", Auth, async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        {
          model: User,
          attributes: ["id"],
        },
      ],
    });
    const product = productData.map((product) => product.get({ plain: true }));
    res.render("profile", {
      product,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", Auth, async (req, res) => {
  try {
    const newProduct = await Product.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", Auth, async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", Auth, async (req, res) => {
  try {
    const updateProduct = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
