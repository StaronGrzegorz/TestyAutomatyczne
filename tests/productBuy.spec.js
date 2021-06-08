const assert = require('assert');
const MainPage = require('../pages/main.page');
const ProductPage = require('../pages/product.page.js');
const InformationWindowPage = require('../pages/informationWindow.page');

//to ten do dalszego rozwiniecia 03 06 21
describe('purchase of an item selected from the home page', () => {
  it.skip('should check the price', () => {
    browser.url('/');
    var price = MainPage.productPrice.getText();
    //przejście do strony produktu
    MainPage.moreInfo.click();
    assert.strictEqual(price, ProductPage.productPrice.getText(), 'wartość ceny jest nieprawidłowa');
  });

  it('should choose a product', () => {
    browser.url('/');
    //browser.pause(3000);
    //przejście do strony produktu
    MainPage.moreInfo.click();
    //increasing the number of products (on product page)
    ProductPage.productQuantityAdd.click();
    //color change (=white)
    ProductPage.productColor.click();
    //adds to cart
    ProductPage.productAddToCart.click();
    browser.pause(3000); //TUTAJ MUSI BYĆ WAIT!!!

    //zgodność danych w oknie potwierdzającym dodanie do koszyka
    assert.strictEqual(
      InformationWindowPage.addInfo.getText(),
      'Product successfully added to your shopping cart',
      'Nieudane dodanie do koszyka'
    );

    //liczba produktów po dodaniu 1szt do wartości domyślnej
    assert.strictEqual('2', InformationWindowPage.quantity.getText(), 'Niezgodna liczba produktów');

    browser.pause(3000);
  });

  it.skip('should confirm adding to cart', () => {
    browser.url('/');

    assert.strictEqual(
      InformationWindowPage.addInfo().getText(),
      'Product successfully added to your shopping cart',
      'Nieudane dodanie do koszyka'
    );
    //liczba produktów po dodaniu 1szt do wartości domyślnej
    assert.strictEqual('2', InformationWindowPage.quantity.getText(), 'Niezgodna liczba produktów');
  });
});
