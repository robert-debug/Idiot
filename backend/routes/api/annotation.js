const express = require('express');
const asyncHandler = require('express-async-handler');
const { Annotation } = require('../../db/models');
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
      console.log(req.body.body)
      const { body, userId, lineId } = req.body;
      const annotation = await Annotation.create({
        body,
        userId,
        lineId
      });
  
      return res.json({
        annotation,
      });
    }),
);

router.put(
    '/:annotationId(\\d+)', 
    validateAnnotation, 
    asyncHandler(async (req, res) =>{
        const annotationId = req.params.annotationId;
        const annotation = await Annotation.findByPk(annotationId);
        const { body } = req.body;
        annotation.body = body;
        await annotation.save();
        return res.json({annotation})


    })
)
router.delete(
    '/:annotationId(\\d+)', 
    validateAnnotation, 
    asyncHandler(async (req, res) =>{
        const annotationId = req.params.annotationId;
        const annotation = await Annotation.findByPk(annotationId);
        await annotation.destroy();
        return res.json({'result':'destroyed'})


    })
)

module.exports = router;