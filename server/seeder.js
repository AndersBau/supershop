import mongoose from "mongoose";
import dotenv from 'dotenv';
import users from "./data/users.js";
import products from "./data/products.js";
import User from './db/models/userModel.js'
import Product from './db/models/productModel.js'
import Order from './db/models/orderModel.js'
import connectDB from "./db/db.js";

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return {...product, user: adminUser }
    });
    await Product.insertMany(sampleProducts);

    console.log('Data Imported!');
    process.exit(1);
  } catch (error) {
      console.error(`${error}`);
      process.exit(1);
  }
}

const deleteData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Deleted!');
    process.exit(1);
  } catch (error) {
      console.error(`${error}`);
      process.exit(1);
  }
}

if(process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
