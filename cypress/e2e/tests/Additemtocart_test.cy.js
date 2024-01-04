const { Additemtocart } = require("../Pages/Additemtocart.cy");
const { Loginpage } = require("../Pages/Sauce_login.cy");

const additem = new Additemtocart();

describe("Add Item to Cart", () => {
  let userdata;
  it("Before each from fixture", () => {
    cy.fixture("loginsaucedemo").then(function (data) {
      userdata = data;
      cy.log("THIS DATA", userdata);
    });
  });

  it("Item added to the cart successfully", () => {
    cy.visit("https://www.saucedemo.com");

    additem.LoginDetails(userdata);

    additem.LoginButton();

    additem.AddtocartItem();
    cy.title().should("eq", "Swag Labs");
  });
});
