const express = require('express');
const asyncHandler = require('express-async-handler');
const { Line, Annotation, Comment } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('', asyncHandler( async (req, res) => {
    const lines = await Line.findAll(
    {
        include: {
                model: Annotation,
                    include: {
                        model: Comment
                    }
            }
    }
    );
    //console.log(tracks)
    return res.json(lines)
}));

router.get('/:id(\\d+)', asyncHandler( async (req, res) => {
    const id = await req.params.id;
    const line = await Line.findByPk(id, 
        {
            include: {
                model: Annotation,
                    include: {
                        model: Comment
                    }
            }
        }
        );
    return res.json(line);
}))

module.exports = router;