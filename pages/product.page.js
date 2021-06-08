class ProductPage {
  //price
  get productPrice() {
    return $('#our_price_display');
  }

  //increasing the number of products
  get productQuantityAdd() {
    return $('#quantity_wanted_p > a.btn.btn-default.button-plus.product_quantity_up > span > i');
  }

  //TODO - w kroku okna informacyjnego pokazuje ""
  //total number of products
  get productQuantityInfo() {
    return $('#quantity_wanted');
  }

  //TODO
  get chooseSize() {
    return $('TODO');
  }

  //product color: white
  get productColor() {
    return $('#color_8');
  }

  //increasing the number of products
  get productAdd() {
    return $('#quantity_wanted_p > a.btn.btn-default.button-plus.product_quantity_up > span > i');
  }

  //adds to cart
  get productAddToCart() {
    return $('#add_to_cart > button > span');
  }
}
module.exports = new ProductPage();
