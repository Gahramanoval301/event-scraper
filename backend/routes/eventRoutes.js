const express = require('express');
const { getEvents } = require('../controllers/eventController');
const router = express.Router();

// Define the route to get events
router.get('/', getEvents); // api/events/

module.exports = router;