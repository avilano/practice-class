
var exports = module.exports = {};

exports.Stock = function() {

    this.ProductId = 'Int';
    this.Quatity = 'Int';
    this.ShopNo = 'Int';


  AddStock();
  ModifyStock(ProductId);
  SelectStockItem(ProductId);

};
