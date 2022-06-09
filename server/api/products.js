import express from "express";
import Product from "../db/models/productModel.js";
import asyncHandler from 'express-async-handler';
const router = express.Router();

//fetch all products
router.get('/', asyncHandler(async (req, res, next) => {
    const products =  await Product.find({});
    res.json(products);
}));

//fetch single product
router.get('/:id', asyncHandler (async(req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
}));



export default router;
