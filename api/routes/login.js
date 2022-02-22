const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user;

    res.status(200).json({ login: true, user: user });
  } else {
    res.json({ login: false, message: 'Вам необходимо зарегистрироваться или Вы ввели неверные данные' });
  }
});

module.exports = router;
