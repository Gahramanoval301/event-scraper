const express = require('express');
const { handleTicketRequest } = require('../controllers/ticketController');
const router = express.Router();


router.post('/', handleTicketRequest)  //api/tickets

module.exports = router;