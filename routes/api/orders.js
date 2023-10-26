const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/notes

// POST /api/notes
router.post('/', ensureLoggedIn, ordersCtrl.create);
router.get('/', ordersCtrl.getOrder);
router.post('/products/:id', ordersCtrl.addToCart);

module.exports = router;
