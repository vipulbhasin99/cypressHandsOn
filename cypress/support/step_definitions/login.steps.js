const { Given, When, Then } = require("cucumber");
const { default: loginPage } = require("../pages/loginPage");
const urls = require("../config/urls.json");
const lp = new loginPage();

Given("I open login page", () => {
  cy.visit(urls.webdriveruniversity.Login);
});

Given("I fill the username input with {string}", (username) => {
  lp.loginUsername(username);
});

Given("I fill the password input with {string}", (password) => {
  lp.loginPassword(password);
});
