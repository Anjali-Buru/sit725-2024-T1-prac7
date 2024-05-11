const express = require('express');
const { addCard, getCards } = require('../controllers/controller.js');

const router = express.Router();

router.post('/', addCard);
router.get('/', getCards);

module.exports = router;
