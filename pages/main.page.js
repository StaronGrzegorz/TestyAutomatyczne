class MainPage {
  //product price
  get productPrice() {
    return $('#homefeatured > li:nth-child(2) > div > div.right-block > div.content_price > span');
  }

  // link -> product (blouse)
  get productLink() {
    return $('#homefeatured > li:nth-child(2) > div > div.right-block > h5 > a');
  }

  //more info button
  get moreInfo() {
    return $(
      '#homefeatured > li:nth-child(2) > div > div.right-block > div.button-container > a.button.lnk_view.btn.btn-default > span'
    );
  }
}

module.exports = new MainPage();
