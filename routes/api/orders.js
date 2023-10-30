const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');



router.post('/', ensureLoggedIn, ordersCtrl.create);
router.get('/', ordersCtrl.getOrder);
router.post('/products/:id', ordersCtrl.addToCart);
router.delete('/products/:id', ordersCtrl.removeFromOrder);
router.post('/cart/checkout', ordersCtrl.checkout);


module.exports = router;
