import mongoose from "mongoose";
import dotenv from 'dotenv';
import users from "./data/users";
import products from "./data/products";
import User from './db/models/userModel.js'
import Product from './db/models/productModel.js'
import Order from './db/models/orderModel.js'
import connectDB from "./db/db";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = Products.map((product) => {
      return {...product, user: adminUser }
    });
    await Product.insertMany(sampleProducts);

    console.log('Data Imported!')
  } catch (error) {
      console.error(`${error}`)
  }
}
