class SignInPage {
  get email() {
    return $('#email');
  }

  get password() {
    return $('#passwd');
  }

  get submit() {
    return $('#SubmitLogin > span');
  }
}

module.exports = new SignInPage();

//dane konta
//first name: Jan
//last name:  Nowak
//adress: Nadmorska 2021
//city: San Franciszko
//state: Alabama
//zip: 01234
//country: United States
//mobile phone: 111222333444
//assign a adress: My adress
