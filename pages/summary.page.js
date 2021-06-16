class SummaryPage {
  get nameProductSummary() {
    //product name
    return $('#product_2_8_0_0 > td.cart_description > p > a');
  }

  get parameterSummary() {
    //product parameters
    return $('#product_2_8_0_0 > td.cart_description > small:nth-child(3) > a');
    //"Color : "White, Size : S"
  }

  get availbilitySummary() {
    return $('#product_2_8_0_0 > td.cart_avail > span');
    //"In stock"
  }

  get priceAllSummary() {
    return $('#total_product');
    //"$54.00"
  }
  /*
  get shippingSummary() {
    //shipping
    return $('#total_shipping');
    //"$2.00"
  }
*/
  get totalPriceSummary() {
    //+ shipping, tax=0
    return $('#total_price');
    //"$56.00"
  }

  get summaryCheckout() {
    //go to payment
    return $('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium');
  }
}

module.exports = new SummaryPage();
