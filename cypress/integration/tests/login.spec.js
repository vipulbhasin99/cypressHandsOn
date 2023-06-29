import loginPage from "../pages/loginPage";

const lp = new loginPage();

context("Login", () => {
  it("Login successfully", () => {
    lp.visitLogin();

    lp.typeUsername("tomsmith");

    lp.typePassword("SuperSecretPassword!");

    lp.clickLogin();
  });
});
