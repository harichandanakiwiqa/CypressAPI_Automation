const { Loginpage } = require("../Pages/Sauce_login.cy");
const { requestdemofields } = require("../Pages/Requestdemo.cy");

const request_demo = new requestdemofields();

describe("Request Demo", () => {
  let userdata;
  it("Before each from fixture", () => {
    cy.fixture("loginsaucedemo").then(function (data) {
      userdata = data;
      cy.log("THIS DATA", userdata);
    });
  });

  it("Request for demo", () => {
    cy.visit("https://www.saucedemo.com");

    request_demo.LoginDetails(userdata);

    request_demo.LoginButton();

    request_demo.requestDemoSignup();
  });
});
