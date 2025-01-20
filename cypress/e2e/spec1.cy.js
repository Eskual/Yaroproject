const { elements } = require("../pages/conMainPage")

describe('First spec', () => {
  it("it should login, redirect and make sure you're signed in", () => {
    cy.visit('/');
    elements.inputLogin().type('alternativeadmin007@com.com');
    elements.inputPassword().type('aboba228SYAO');
    elements.btnSignIn().click();
    elements.modalPopUp().should('be.visible');
    elements.btnClose().click();
    elements.dropbarMyEmail().should('be.visible');
    elements.dropbarCallCenter().should('be.visible');
  })
})