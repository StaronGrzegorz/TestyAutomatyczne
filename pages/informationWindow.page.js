class InformationWindowPage {
  get addInfo() {
    //information about the result of adding to the cart
    return $('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2');
  }

  get quantity() {
    //number of products
    return $('#layer_cart_product_quantity');
  }

  get priceAll() {
    //price of all products
    return $('#layer_cart_product_price');
    //"$54.00"
  }

  get proceedToCheckout() {
    return $('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a');
    //"Proceed to checkout"
  }
}

module.exports = new InformationWindowPage();
