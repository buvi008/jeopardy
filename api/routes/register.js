const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const salt = process.env.SALT;

router.route('/').post(async (req, res) => {
  const { username, email, password } = req.body;

  const userInDatabase = await User.findOne({ where: { email } });

  if (userInDatabase) {
    res.status(403).json({ registration: false, message: 'Этот email уже используется' });
  } else {
    try {
      const user = await User.create({
        username,
        email,
        password: await bcrypt.hash(password, Number(salt)),
      });

      req.session.user = user;

      res.status(201).json({ registration: true, user: user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
});

module.exports = router;
