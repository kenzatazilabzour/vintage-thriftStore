const Order = require('../../models/order');

module.exports = {
  create,
  checkoutAll,
};

async function checkoutAll(req, res) {
  const orders = await Order.find().populate('seller').exec();
  res.json(orders);
}

async function create(req, res) {
  try {

    req.body.seller = req.user._id;
    const order = await Order.create(req.body);
    // eslint-disable-next-line no-undef
    res.json(order);
  } catch (err) {
    res.status(400).json(err);
  }
}
