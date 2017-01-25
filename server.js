const express = require('express');
const path = require('path');
const swig = require('swig');
const db = require('./db');
swig.setDefaults({ cache: false });

const app = express();
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.get('/', (req, res, next)=> {
  res.render('index', { foo: 'bar'});
});

app.get('/products', (req, res, next)=> {
  res.render('products', { products: db.products });
});

app.get('/products/:id', (req, res, next)=> {
  res.render('product', { product: db.getProduct(req.params.id) });
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));
