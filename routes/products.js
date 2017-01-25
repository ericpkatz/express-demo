const app = require('express').Router();
const db = require('../db');

app.get('/', (req, res, next)=> {
  res.render('products', { products: db.products });
});

app.get('/:id', (req, res, next)=> {
  res.render('product', { product: db.getProduct(req.params.id) });
});

app.post('/', (req, res, next)=> {
  db.insertProduct(req.body);
  res.redirect('/products');
});

module.exports = app;
