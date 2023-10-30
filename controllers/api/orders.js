const Order = require('../../models/order');
const Product = require('../../models/product');



module.exports = {
  create,
  getOrder,
  addToCart,
  removeFromOrder,
  checkout,
};

async function getOrder(req, res) {
  const cart = await Order.getCart(req.user._id)
   res.json(cart);

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

async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id)
  const product = await Product.findById(req.params.id)
  if (!cart.products.includes(product._id)) {
    cart.products.push(product)
  }
  await cart.save()
  console.log(cart);
}

async function removeFromOrder(req, res) {
  console.log('helo');
  const cart = await Order.getCart(req.user._id)
  cart.products.remove(req.params.id)
  await cart.save()
  res.json(cart);

}

async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}
