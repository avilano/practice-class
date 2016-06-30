export.class Order extends Customer {
  constructor(){
    this.OrderId = 'Int';
    this.CustomerId = 'Int';
    this.CustomerName = 'String';
    this.ProductId = 'Int';
    this.Amount = 'Float';
    this.OrderDate = 'Datetime';
  }

  CreateOrder(){};
  EditOrder(OrderId){};

};
