const _products = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'bazz' },
];



module.exports = {
  products: _products,
  insertProduct: (product)=> {
    let maxId = _products.reduce( (max, product)=> {
      if(product.id > max){
        max = product.id;
      }
      return max;
    }, 0);
    product.id = ++maxId;
    _products.push(product);
  },
  getProduct: (id)=> {
    return _products.filter( product => product.id === id*1 )[0]
  }
};
