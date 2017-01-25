const _products = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'bazz' },
];

module.exports = {
  products: _products,
  getProduct: (id)=> {
    return _products.filter( product => product.id === id*1 )[0]
  }
};
