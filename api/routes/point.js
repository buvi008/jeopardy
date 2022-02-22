const router = require('express').Router();
const { Result } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const points = await Result.findAll({
      where: { userId: req.session.user.id },
      raw: true,
    });
    return res.status(200).json(points);
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
});

router.post('/', async (req, res) => {
  try {
    const data = req.body.data;
    await Result.create({
      userId: req.session.user.id,
      username: req.session.user.username,
      points: Number(data),
    });

    res.status(200).json({ create: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
