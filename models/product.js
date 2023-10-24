const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  categories: {
    type: String,
    required: true,
    enum: ["t-shirts", "pants", "activewear", "jackets", "dresses", "shoes", "accessories"]
  },

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
