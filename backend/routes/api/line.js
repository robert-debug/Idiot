const express = require('express');
const asyncHandler = require('express-async-handler');
const { Line, Annotation, Comment } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get('/tracks/:id(\\d+)', asyncHandler( async (req, res) => {
    const id = req.params.id;
    const lines = await Line.findAll(
    {
        where: {
            trackId : id
        },
        include: {
                model: Annotation
            }
    }
    );
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