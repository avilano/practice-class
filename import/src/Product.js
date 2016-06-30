export.class Product extends Order {
  constructor(){
    this.ProductId = 'Int';
    this.ProductPrice = 'Float';
    this.ProductType = 'String';
  }

  AddProduct(){};
  ModifyProduct(){};
  SelectProduct(ProductId){};

};
