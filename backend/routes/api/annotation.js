const express = require('express');
const asyncHandler = require('express-async-handler');
const { Annotation, Comment, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

const validateAnnotation = [
    check('body')
      .exists({ checkFalsy: true })
      .withMessage('Please provide an annotation.'),
    handleValidationErrors
]
router.get('/line/:id(\\d+)', asyncHandler( async (req, res) => {
  const id = await req.params.id;
  const annotations = await Annotation.findAll(
  {
     where: {
        lineId: id
     }, include:{
        model: User
     }
  }
  );
  return res.json(annotations)
}));

router.get('/:id(\\d+)', asyncHandler( async (req, res) => {
  const id = await req.params.id;
  const annotation = await Track.findByPk(id, 
    {
      include: {
          model: User
      }
   }
   );
  return res.json(annotation);
}))
router.post(
    '/',
    validateAnnotation,
    asyncHandler(async (req, res) => {
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
    // validateAnnotation, 
    asyncHandler(async (req, res) =>{
      const annotationId = await req.params.annotationId;
      const annotation = await Annotation.findByPk(annotationId);

      const body = req.body;
      annotation.body = body.body;
      await annotation.save();
      return res.json({annotation})


    })
)
router.delete(
    '/:annotationId(\\d+)', 
    asyncHandler(async (req, res) =>{
        const annotationId = req.params.annotationId;
        const annotation = await Annotation.findByPk(annotationId);
        await annotation.destroy();
        return res.json({'result':'destroyed'})


    })
)

module.exports = router;