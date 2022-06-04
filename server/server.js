const express = require('express')
const products = require('./data/products')
const app = express()
products
app.get('/', (req, res, next) => {
  res.send('API is running')
})

app.get('/products', (req, res, next) => {
  res.json(product)
})

app.get('/product/:id', (req, res, next) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product)
})

app.listen(8080, console.log(`Now serving on port 8080`))
