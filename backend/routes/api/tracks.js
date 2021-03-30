const express = require('express');
const asyncHandler = require('express-async-handler');
const { Track } = require('../../db/models');

const router = express.Router();

router.get('/tracks', asyncHandler(async (req, res) => {
    const tracks = await Track.findAll();
    return res.json(tracks)
}));

module.exports = router;