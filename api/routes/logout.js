const router = require('express').Router();

router.route('/').get((req, res) => {
  const { user } = req.session;

  if (user) {
    req.session.destroy();

    res.clearCookie('user_sid');

    res.status(200).json({ logout: false });
  } else {
    res.status(500).end();
  }
});

module.exports = router;
