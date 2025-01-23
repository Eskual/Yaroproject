const { loginPage } = require("../pages/conLoginPage")
const { mainPage } = require("../pages/conMainPage")
const { testUser } = require("../e2e/credentials.json")

describe('First spec', () => {
  it("should login, redirect and make sure you're signed in", () => {
    cy.intercept("POST", "https://admin-dt.convoso.com/dashboard/set-cookie-for-sendgrid-modal").as('mainPageLoadRequest');
    cy.log('visit login page');
    cy.visit('/');                                                                            // Visit login page

    cy.log('Put in credentials');  
    loginPage.inputLogin().should('be.visible');
    loginPage.inputLogin().type(testUser.login);
    loginPage.inputPassword().should('be.visible');
    loginPage.inputPassword().type(testUser.password);
    loginPage.btnSignIn().click();                                                            // Put in credentials and click "sign in" button
                                                                                              
    cy.log('visit login page');  
    cy.wait('@mainPageLoadRequest').its('response.statusCode').should('eq', 200);
    mainPage.modalPopUp().should('be.visible');
    mainPage.btnClose().click();                                                              // Close popup window
                                                                                              
    cy.log('verify login is successful');
    mainPage.dropbarMyEmail().should('be.visible').contains(testUser.login);
    mainPage.dropbarCallCenter().should('be.visible');                                        // Verify login is successful
  })
})