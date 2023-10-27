const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/', ensureLoggedIn, productsCtrl.create);
router.get('/', productsCtrl.getAll);



module.exports = router;
