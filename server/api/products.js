import express from "express";
import Product from "../db/models/productModel";
import asyncHandler from 'express-async-handler';
const router = express.Router();

app.get('/', asyncHandler(async (req, res, next) => {
    const products =  await Product.find({});
    res.json(products)
}))

app.get('/:id', asyncHandler ((req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({message: 'Product not found'});
  }
}));



export default router;
