class AddressPage {
  get checkboxAddress() {
    //checkbox "use delivery address as the billing address"
    return $('#addressesAreEquals');
  }

  get deliveryName() {
    return $('#address_delivery > li.address_firstname.address_lastname');
    //'Jan Nowak'
  }

  get deliveryStreet() {
    return $('#address_delivery > li.address_address1.address_address2');
    //'Nadmorska 2021'
  }

  get deliveryCity() {
    return $('#address_delivery > li.address_city.address_state_name.address_postcode');
    //'San Franciszko, Alabama 01234'
  }

  get deliveryCountry() {
    return $('#address_delivery > li.address_country_name');
    //"United States"
  }

  get deliveryPhoneNumber() {
    return $('#address_delivery > li.address_phone_mobile');
    //'111222333444'
  }

  get deliveryCheckout() {
    return $('#center_column > form > p > button');
    //Proceed to checkout
  }
}

module.exports = new AddressPage();
