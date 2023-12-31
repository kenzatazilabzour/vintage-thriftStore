const Order = require('../../models/order');
const Product = require('../../models/product');



module.exports = {
  create,
  getOrder,
  addToCart,
  removeFromOrder,
  checkoutProduct,
  getAllForUser,
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

async function checkoutProduct(req, res) {
  const cart = await Order.getCart(req.user._id);
  let total = 0
  cart.isPaid = true;
  for (let i = 0; i < cart.products.length; i++){
    const product = await Product.findById(cart.products[i]._id)
    product.isSold = true
    total += product.price
    await product.save()
  }
  cart.totalPrice = total;
  console.log(cart);
   await cart.save();
  res.json(cart);
}

async function getAllForUser(req, res) {
  const orders = await Order.find({user: req.user._id, isPaid:true}).populate('products').sort('-updatedAt')
  res.json(orders);
}
