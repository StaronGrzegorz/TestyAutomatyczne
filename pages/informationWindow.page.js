class InformationWindowPage {
  //information about the result of adding to the cart
  get addInfo() {
    return $('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2');
  }
  //number of products
  get quantity() {
    return $('#layer_cart_product_quantity');
  }
  //color, size
  get productParameters() {
    return $('#layer_cart_product_attributes');
  }
}

module.exports = new InformationWindowPage();
