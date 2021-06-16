class ShippingPage {
  get checkboxShipping() {
    //terms of agreements checkout
    return $('#cgv');
  }

  get checkoutShipping() {
    //proceed to checkout
    return $('#form > p > button > span');
  }
}

module.exports = new ShippingPage();
