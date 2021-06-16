class ProductPage {
  get productPrice() {
    //price
    return $('#our_price_display');
  }

  get productQuantityInfo() {
    //total number of products
    return $('#quantity_wanted');
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
