const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
  quantity: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
  isPaid: { type: Boolean, default: false }
});

orderSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    // query object
    { user: userId, isPaid: false },
    // update doc - provides values when inserting
    { user: userId },
    // upsert option
    { upsert: true, new: true }
  ).populate('products').exec();
}
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
