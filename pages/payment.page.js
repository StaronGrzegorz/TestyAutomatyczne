class PaymentPage {
  get namePayment() {
    return $('td.cart_description > p > a');
    //"Blouse"
  }

  get parameterPayment() {
    return $('td.cart_description > small:nth-child(3) > a');
    //"Color : White, Size : S"
  }

  get availbilityPayment() {
    return $('td.cart_avail > span');
    //"In stock"
  }

  get pricePayment() {
    return $('td.cart_total');
    //"$54.00"
  }

  get totalPricePayment() {
    //+transport, tax=0
    return $('#total_price');
    //"$56.00"
  }

  get bankWirePayment() {
    return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
    //"Pay by bank wire (order processing will be longer)"
  }

  get checkPayment() {
    return $('#HOOK_PAYMENT > div:nth-child(2) > div > p > a');
  }

  get confirmPayment() {
    return $('#cart_navigation > button');
  }
}

module.exports = new PaymentPage();
