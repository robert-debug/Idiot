// backend/routes/index.js
const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
// const { Track, Annotation, Line, Comment } = require('../db/models');
router.use('/api', apiRouter);
//Test Route for Associations
// router.get('/hello/world', async function(req, res) {
//   const tracks = await Track.findAll(
//     {
//       include: {
//         model: Line,
//         include:{
//           model: Annotation,
//           include: Comment
//         }
//       }
//     });
//   console.log('-----------------', tracks)
//   res.send(tracks);
// });
// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });
}

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
  router.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.status(201).json({});
  });
}

module.exports = router;