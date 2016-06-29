
export.Business = function() {

class Customer{
  constructor(){
    this.CustomerID = 'Int';
    this.CustomerName = 'String';
    this.Address = 'String';
    this.Phone = 'Int';
  }

  AddCustomer();
  EditCustomer();
  DeleteCustomer();


}

class Order extends Customer {
  constructor(){
    this.OrderId = 'Int';
    this.CustomerId = 'Int';
    this.CustomerName = 'String';
    this.ProductId = 'Int';
    this.Amount = 'Float';
    this.OrderDate = 'Datetime';
  }

  CreateOrder();
  EditOrder(OrderId);

}

class Product extends Order {
  constructor(){
    this.ProductId = 'Int';
    this.ProductPrice = 'Float';
    this.ProductType = 'String';
  }

  AddProduct();
  ModifyProduct();
  SelectProduct(ProductId);

}

class Stock extends Product {
  constructor(){
    this.ProductId = 'Int';
    this.Quatity = 'Int';
    this.ShopNo = 'Int';
  }

  AddStock();
  ModifyStock(ProductId);
  SelectStockItem(ProductId);

}

}
