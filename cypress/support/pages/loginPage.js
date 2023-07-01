// const { loginPageLocators } = require("../locators/login.locators.js");
import loginLocators from "../locators/login.locators.js";
const loginEl = new loginLocators();

export default class loginPage {
  loginUsername(username) {
    loginEl.username.type(username);
  }

  loginPassword(password) {
    loginEl.password.type(username);
  }

  loginClick() {
    loginEl.loginButton.click();
  }
}
