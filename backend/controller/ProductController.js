import Product from '../model/productModal.js';
import asyncHandler from '../middleware/asyncHandler.js';

//@desc fetch all products
//@route GET /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.json(products);
});

//@desc fetch specific product
//@route GET /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
    debugger;
    console.log(req);
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  }
});

export {getProducts, getProductById};
