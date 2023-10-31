const Product = require('../../models/product');


module.exports = {
  create,
  getAll,

};

async function getAll(req, res) {
  const products =  await Product.find({isSold:false}).populate('seller').exec();
  res.json(products);
}

async function create(req, res) {
  console.log(req.body);
  try {

    req.body.seller = req.user._id;
    const product = await Product.create(req.body);
    // eslint-disable-next-line no-undef
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
