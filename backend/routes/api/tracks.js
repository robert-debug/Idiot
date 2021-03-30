const express = require('express');
const asyncHandler = require('express-async-handler');
const { Track, Comment, Line, Annotation } = require('../../db/models');

const router = express.Router();

router.get('/tracks', asyncHandler( async (req, res) => {
    const tracks = await Track.findAll();
    return res.json(tracks)
}));

router.get('/tracks//:id(\\d+)', asyncHandler( async (req, res) => {
    const id = await req.params.id;
    const track = await Track.findByPK(id, 
        {
        include: {
            model: Line,
            include: {
                model: Annotation,
                include: {
                    model: Comment
                }
            }
        }
    })
}))

module.exports = router;