var exports = module.exports = {};

exports.Order = function() {

      this.OrderId = 'Int';
      this.CustomerId = 'Int';
      this.CustomerName = 'String';
      this.ProductId = 'Int';
      this.Amount = 'Float';
      this.OrderDate = 'Datetime';


    CreateOrder();
    EditOrder(OrderId);

  };
