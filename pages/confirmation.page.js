class ConfirmationPage {
  get comment() {
    return $('#center_column > div > p');
  }

  get totalPriceConfirmation() {
    return $('#center_column > div > span');
  }
}

module.exports = new ConfirmationPage();
