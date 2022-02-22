const router = require('express').Router();
const {Theme, Question} = require('../db/models')

router.get('/', async (req, res) => {
    try {
        const quest = await Theme.findAll({include: Question});
        res.json(quest);
    } catch (e) {
        res.sendStatus(500);
    }
});

module.exports = router;
