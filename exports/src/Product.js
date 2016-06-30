var exports = module.exports = {};

exports.Product = function() {


    this.ProductId = 'Int';
    this.ProductPrice = 'Float';
    this.ProductType = 'String';


  AddProduct();
  ModifyProduct();
  SelectProduct(ProductId);

};
