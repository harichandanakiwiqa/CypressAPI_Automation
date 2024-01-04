const { logoutpage } = require("../Pages/logout.cy");
const { Loginpage } = require("../Pages/Sauce_login.cy");
const logout = new logoutpage();

const login = new Loginpage();

describe("Logout test", () => {
  let userdata;
  it("Before each from fixture", () => {
    cy.fixture("loginsaucedemo").then(function (data) {
      userdata = data;
      //cy.log("THIS DATA", userdata);
    });
  });

  it("Sauce logout", () => {
    cy.visit("https://www.saucedemo.com");

    logout.LoginDetails(userdata);

    logout.LoginButton();

    logout.logout_Page_Button();
  });
});
