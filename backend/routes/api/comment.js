const express = require('express');
const asyncHandler = require('express-async-handler');
const { Comment } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateAnnotation = [
    check('body')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a annotation.'),
    handleValidationErrors
]

router.post(
    '/',
    validateAnnotation,
    asyncHandler(async (req, res) => {
      const { body, userId, annotationId } = req.body;
      const comment = await Comment.create({
        body,
        userId,
        annotationId
      });
  
      return res.json({
        comment,
      });
    }),
);

router.put(
    '/comments/:commentId(\\d+)', 
    validateAnnotation, 
    asyncHandler(async (req, res) =>{
        const commentId = req.params.commentId;
        const comment = await Comment.findByPk(commentId);
        const { body } = req.body;
        comment.body = body;
        await comment.save();
        return res.json({comment})

    })
)
router.delete(
    '/comments/:commentId(\\d+)', 
    validateAnnotation, 
    asyncHandler(async (req, res) =>{
        const commentId = req.params.commentId;
        const comment = await Comment.findByPk(commentId);
        await comment.destroy();
        return res.json({'result':'destroyed'})


    })
)

module.exports = router;