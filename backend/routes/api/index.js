const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const tracksRouter = require('./tracks')
const annotationsRouter = require('./annotation');
const commentsRouter = require('./comment')
const linesRouter = require('./line');

router.use('/session', sessionRouter);
router.use('/tracks', tracksRouter);
router.use('/annotations', annotationsRouter);
router.use('/users', usersRouter);
router.use('/comments', commentsRouter)
router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });
router.use('/lines', linesRouter)
module.exports = router;