import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js'
import products from './api/products.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config();

connectDB();

const app = express()

app.get('/', (req, res, next) => {
  res.send('API is running')
})

app.use('/api/products', products);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))
