const express = require('express');
const path = require('path');
const swig = require('swig');
const bodyParser = require('body-parser');
swig.setDefaults({ cache: false });

const app = express();
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded( { extended: false }));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.get('/', (req, res, next)=> {
  res.render('index', { foo: 'bar'});
});

app.use('/products', require('./routes/products'));

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));
