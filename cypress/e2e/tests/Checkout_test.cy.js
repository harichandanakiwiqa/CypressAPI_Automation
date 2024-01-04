const { cartitemcheckoutfields } = require("../Pages/Checkout.cy");
const { Loginpage } = require("../Pages/Sauce_login.cy");
const { Additemtocart } = require("../Pages/Additemtocart.cy");

let itemcheckout = new cartitemcheckoutfields();

describe("Cart Check Out", () => {
  let userdata;
  it("Before each from fixture", () => {
    cy.fixture("loginsaucedemo").then(function (data) {
      userdata = data;
      cy.log("THIS DATA", userdata);
    });
  });

  it("Checkout the product", () => {
    cy.visit("https://www.saucedemo.com");

    itemcheckout.LoginDetails(userdata);
    itemcheckout.LoginButton();
    itemcheckout.AddtocartItem();
    itemcheckout.checkoutYourInformation();
    assert.equal("Checkout: Your Information", "Checkout: Your Information");
  });
});
