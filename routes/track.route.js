const express = require('express');
const trackController = require('../controllers/track.controller');

const router = express.Router();

router.get('/emailTrack/:id.png', trackController.openTracker);

router.get('/create', trackController.createTracker);
module.exports = router;
