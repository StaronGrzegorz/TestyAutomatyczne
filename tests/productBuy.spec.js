const assert = require('assert');
const MainPage = require('../pages/main.page');
const ProductPage = require('../pages/product.page.js');
const InformationWindowPage = require('../pages/informationWindow.page');
const SummaryPage = require('../pages/summary.page');
const SignInPage = require('../pages/signin.page');
const AddressPage = require('../pages/address.page');
const ShippingPage = require('../pages/shipping.page');
const signinPage = require('../pages/signin.page');
const PaymentPage = require('../pages/payment.page');
const ConfirmationPage = require('../pages/confirmation.page');

describe('purchase of an item selected from the home page', () => {
  it('should choose a product', () => {
    const timeWait = 8000;
    const priceAll = '$54.00';
    const nameProduct = 'Blouse';
    const parameters = 'Color : White, Size : S';
    const availbility = 'In stock';
    const quantity = '2';
    const totalPrice = '$56.00';
    //user
    const nameLast = 'Nowak';
    const nameFirst = 'Jan';
    const street = 'Nadmorska 2021';
    const city = 'San Franciszko, Alabama 01234';
    const country = 'United States';
    const phoneNumber = '111222333444';
    const totalPriceTax = '$58.24';
    //sign in
    const email = 'loko@koko.com';
    const pass = 'webdriverio';
    //confirmation
    const infoConfirmation = 'Your order on My Store is complete.';
    //logout
    const logout = $('#header > div.nav > div > div > nav > div:nth-child(2) > a');

    browser.url('/');

    //go to the product page
    MainPage.moreInfo.click();

    //increasing the number of products (on product page)
    ProductPage.productAdd.click();

    //color change (=white)
    ProductPage.productColor.click();

    //adds to cart
    ProductPage.productAddToCart.click();
    InformationWindowPage.addInfo.waitForDisplayed(timeWait);

    //assert information page
    assert.strictEqual(InformationWindowPage.addInfo.isDisplayed(), true, 'Nieudane dodanie do koszyka');
    assert.strictEqual(
      InformationWindowPage.addInfo.getText(),
      'Product successfully added to your shopping cart',
      'Nieudane dodanie do koszyka'
    );
    assert.strictEqual(quantity, InformationWindowPage.quantity.getText(), 'Niezgodna liczba produktów');
    assert.strictEqual(priceAll, InformationWindowPage.priceAll.getText(), 'Niezgodna cena produktu');

    //information page - proceed to checkout->Summary
    InformationWindowPage.proceedToCheckout.click();
    //Summary
    SummaryPage.summaryCheckout.waitForDisplayed(timeWait);
    assert.strictEqual(nameProduct, SummaryPage.nameProductSummary.getText(), 'Niezgodna nazwa produktu');
    assert.strictEqual(parameters, SummaryPage.parameterSummary.getText(), 'Niezgodne parametry produktu');
    assert.strictEqual(availbility, SummaryPage.availbilitySummary.getText(), 'Niezgodny status produktu');
    assert.strictEqual(priceAll, SummaryPage.priceAllSummary.getText(), 'Niezgodna cena sumaryczna');
    assert.strictEqual(totalPrice, SummaryPage.totalPriceSummary.getText(), 'Niezgodna cena do zapłaty');
    //Summary-checkout -> SignInPage
    SummaryPage.summaryCheckout.click();
    SignInPage.email.waitForDisplayed(timeWait);

    //SignInPage - login: email, password
    SignInPage.email.click();
    SignInPage.email.setValue(email);
    SignInPage.password.click();
    SignInPage.password.setValue(pass);
    //SignInPage-checkout-> adressPage
    signinPage.submit.click();

    //adressPage
    assert.strictEqual(
      nameFirst + ' ' + nameLast,
      AddressPage.deliveryName.getText(),
      'Niezgodne imię i nazwisko adresata'
    );
    assert.strictEqual(street, AddressPage.deliveryStreet.getText(), 'Niezgodna nazwa ulicy');
    assert.strictEqual(city, AddressPage.deliveryCity.getText(), 'Niezgodna nazawa miejscowości');
    assert.strictEqual(country, AddressPage.deliveryCountry.getText(), 'Niezgodna nazwa kraju');
    assert.strictEqual(phoneNumber, AddressPage.deliveryPhoneNumber.getText(), 'Niezgodny nr telefonu');
    //adresPage->Shipping
    AddressPage.deliveryCheckout.click();
    ShippingPage.checkoutShipping.waitForDisplayed(timeWait);

    //ShippingPage
    ShippingPage.checkboxShipping.click();
    assert.strictEqual(true, ShippingPage.checkboxShipping.isSelected(), 'checkbox nie został oznaczony');
    //ShippingPage-> Payment
    ShippingPage.checkoutShipping.click();

    //Payment
    assert.strictEqual(nameProduct, PaymentPage.namePayment.getText(), 'Niezgodna nazwa produktu');
    assert.strictEqual(parameters, PaymentPage.parameterPayment.getText(), 'Niezgodne parametry produktu');
    assert.strictEqual(availbility, PaymentPage.availbilityPayment.getText(), 'Niezgodny status produktu');
    assert.strictEqual(priceAll, PaymentPage.pricePayment.getText(), 'Niezgodna cena sumaryczna');
    assert.strictEqual(totalPriceTax, PaymentPage.totalPricePayment.getText(), 'Niezgodna cena do zapłaty');
    //Payment->Confirmation
    PaymentPage.bankWirePayment.click();
    PaymentPage.confirmPayment.waitForDisplayed(timeWait);
    PaymentPage.confirmPayment.click();
    ConfirmationPage.comment.waitForDisplayed(timeWait);

    //Confirmation
    assert.strictEqual(infoConfirmation, ConfirmationPage.comment.getText());
    assert.strictEqual(totalPriceTax, ConfirmationPage.totalPriceConfirmation.getText(), 'Niezgodna cena do zapłaty');

    //logout
    logout.click();
    //browser.pause(3000);
  });
});
