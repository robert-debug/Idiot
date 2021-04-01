const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const trackRouter = require('./tracks')
const annotationRouter = require('./annotation');
const commentRouter = require('./comment')


router.use('/session', sessionRouter);
router.use('/tracks', trackRouter);
router.use('/annotations', annotationRouter);
router.use('/users', usersRouter);
router.use('/comments', commentRouter)
router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });
module.exports = router;