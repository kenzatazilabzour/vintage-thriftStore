const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const Product = require('../models/order');

// All paths start with '/api/notes

// POST /api/notes
router.post('/', ensureLoggedIn, ordersCtrl.create);
router.get('/', ordersCtrl.getOrder);
router.post('/products/:id', ordersCtrl.addToCart);
router.delete('/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.remove();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the product' });
  }
});

module.exports = router;
