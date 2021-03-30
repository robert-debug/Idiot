const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const trackRouter = require('./tracks')

router.use('/session', sessionRouter);
router.use('/tracks', trackRouter);
router.use('/users', usersRouter);
router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });
module.exports = router;