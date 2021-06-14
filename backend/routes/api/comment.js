const express = require('express');
const asyncHandler = require('express-async-handler');
const { Comment, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateComment = [
    check('body')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a Comment.'),
    handleValidationErrors
]

router.get('/tracks/:id(\\d+)', asyncHandler( async (req, res) => {
  const id = await req.params.id;
  const comments = await Comment.findAll(
    {
      where: {
         trackId: req.params.id
      }, include:{
        model: User
     }
   }
  );
  return res.json(comments)
}));

router.get('/:id(\\d+)', asyncHandler( async (req, res) => {
  const id = await req.params.id;
  const comment= await Track.findByPk(id);
  return res.json(comment);
}))
router.post(
    '/',
    validateComment,
    asyncHandler(async (req, res) => {
      const { body, userId, trackId } = req.body;
      const comment = await Comment.create({
        body,
        userId,
        trackId
      });
  
      return res.json({
        comment,
      });
    }),
);

router.put(
    '/:commentId(\\d+)', 
    validateComment, 
    asyncHandler(async (req, res) =>{
      const commentId = await req.params.commentId;
      const comment = await Comment.findByPk(commentId);
      const body  = req.body.body;
      comment.body = body;
      await comment.save();
      return res.json({comment})

    })
)
router.delete(
    '/:commentId(\\d+)',
    asyncHandler(async (req, res) =>{
        const commentId = req.params.commentId;
        const comment = await Comment.findByPk(commentId);
        await comment.destroy();
        return res.json({'result':'destroyed'})


    })
)

module.exports = router;