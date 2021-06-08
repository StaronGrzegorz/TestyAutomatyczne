class MainPage {
  //product price - cena widoczna na stronie głównej
  get productPrice() {
    return $('#homefeatured > li:nth-child(2) > div > div.right-block > div.content_price > span');
  }

  // link do strony produktu (blouse)
  get productLink() {
    return $('#homefeatured > li:nth-child(2) > div > div.right-block > h5 > a');
  }

  //przycisk prowadzący do strony produktu (blouse)
  get moreInfo() {
    return $(
      '#homefeatured > li:nth-child(2) > div > div.right-block > div.button-container > a.button.lnk_view.btn.btn-default > span'
    );
  }
}

module.exports = new MainPage();
