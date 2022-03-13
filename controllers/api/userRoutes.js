const router = require('express').Router();
const { User } = require('../../models')

router.post('/', async (req, res) => {
  try {
    // check if the email exist before creating a new one
    
    // creates a new user in the database using the req.body field

    const userData = await User.create(req.body);
    // const userData = await User.create({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: req.body.password,
    // })
    console.log(userData)
    // uses the same id as the user for the session id
    req.session.user_id = userData.id;
    //simple login boolean
    req.session.logged_in = true;
    // sending a response
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/login', async (req, res) => {
  try {
    // res.render('login');
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.user_id = userData.id;
    req.session.logged_in = true;
      
    res.json({ user: userData, message: 'You are now logged in!' });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
