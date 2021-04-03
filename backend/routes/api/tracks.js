const express = require('express');
const asyncHandler = require('express-async-handler');
const { Track, Comment, Line, Annotation } = require('../../db/models');

const router = express.Router();

router.get('', asyncHandler( async (req, res) => {
    const tracks = await Track.findAll();
    //console.log(tracks)
    return res.json(tracks)
}));

router.get('/:id(\\d+)', asyncHandler( async (req, res) => {
    const id = await req.params.id;
    const track = await Track.findByPk(id)
    return res.json(track);
}))

module.exports = router;