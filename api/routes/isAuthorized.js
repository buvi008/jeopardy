const router = require('express').Router();
const { Result } = require('../db/models');

router.post('/', async (req, res) => {
  const isAuthorized = !!req.session.user;
  if (req.session.user) {
    const { user } = req.session;
    return res.json({ isAuthorized, user });
  }
  return res.json({ isAuthorized });
});

//лист результатов всех участников
router.get('/', async (req, res) => {
  let results;
  try {
    results = await Result.findAll({
      raw: true,
    });
  }
  catch (error) {
    res.status(401).json({ error: error.message });
    return;
  }
  results.sort((a, b) => b.points - a.points);
  results = results.slice(0, 5)
  console.log(results)
  res.json({ results });
})


module.exports = router;
