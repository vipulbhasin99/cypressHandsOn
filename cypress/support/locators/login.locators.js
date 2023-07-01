export default class loginLocators {
  username() {
    return cy.get("#text");
  }

  password() {
    return cy.get("#password");
  }

  loginButton() {
    return cy.get("#login-button");
  }
}
