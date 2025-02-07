const { loginPage } = require("../pages/conLoginPage")
const { mainPage } = require("../pages/conMainPage")
const { testUser } = require("../e2e/credentials.json")
const { managePage } = require("../pages/conManagePage")
const { modalPage } = require("../pages/conModalPage")
const { campaignGeneralPage } = require("../pages/conCampaignGeneralPage")
function getRandomInt() {
  return Math.floor(Math.random() * 100);
}
const campaignName = `DELETE${getRandomInt()}_syao-campaign-ed-001`

describe('First spec', () => {
  beforeEach(() => {
    cy.log('visit login page');
    cy.visit('/');                                                                            // Visit login page

    cy.log('Put in credentials');
    loginPage.inputLogin().should('be.visible');
    loginPage.inputLogin().type(testUser.login);
    loginPage.inputPassword().should('be.visible');
    loginPage.inputPassword().type(testUser.password);
    loginPage.btnSignIn().click();                                                            // Put in credentials and click "sign in" button
  })

  it("should login, redirect and make sure you're signed in", () => {
    cy.intercept("POST", "https://admin-dt.convoso.com/dashboard/set-cookie-for-sendgrid-modal").as('mainPageLoadRequest');
    cy.intercept("POST", "https://admin-dt.convoso.com/campaign/search").as("managePageLoadRequest");
    cy.intercept("POST", "https://rs.fullstory.com/rec/page").as("createCampaignPageLoadRequest");
    //cy.intercept("POST", "https://safesoft.zendesk.com/embeddable/config").as("secondModalPage")
    // cy.log('visit login page');
    // cy.visit('/');                                                                            // Visit login page
    // cy.log('Put in credentials');  
    // loginPage.inputLogin().should('be.visible');
    // loginPage.inputLogin().type(testUser.login);
    // loginPage.inputPassword().should('be.visible');
    // loginPage.inputPassword().type(testUser.password);
    // loginPage.btnSignIn().click();                                                            

    cy.log('Visit main page');
    cy.wait('@mainPageLoadRequest').its('response.statusCode').should('eq', 200);
    mainPage.modalPopUp().should('be.visible');
    mainPage.btnClose().click();                                                              // Close popup window

    cy.log('Verify login is successful');
    mainPage.dropbarMyEmail().should('be.visible').contains(testUser.login);
    mainPage.dropbarCallCenter().should('be.visible');                                        // Verify login is successful

    cy.log('Using dropdown menu to get to the Campaigns')
    mainPage.dropbarCallCenter().click();
    mainPage.btnCampaigns().should('be.visible');
    mainPage.btnCampaigns().click()                                                           // Using dropdown menu to get to the Campaigns            


    cy.log('Making sure Campaigns page is loaded')
    cy.wait('@managePageLoadRequest').its('response.statusCode').should('eq', 200);
    cy.url().should('include', 'campaign#/Manage')
    managePage.searchInput().should('be.visible')
    managePage.headerSearchCampaign().should('be.visible').contains('Show Campaigns')
    managePage.buttonAddCampaign().should('be.visible')                                       // Making sure Campaigns page is loaded

    cy.log('Filling out first modal form')
    managePage.buttonAddCampaign().click();
    managePage.modalPage().should('be.visible')
    cy.enter('iframe[id="myIframe"]').then(getBody => {
      getBody().find(modalPage.toggleButton()).should('be.visible')
        .and('have.class', 'bootstrap-switch-on');
      getBody().find(modalPage.inputName()).should('be.visible').type(campaignName)
      getBody().find(modalPage.inputName()).should('have.value', campaignName)
      getBody().find(modalPage.dropDown()).invoke('val').should('eq', 'string:0')
      getBody().find(modalPage.createCmpgnBtn()).click()                                    // Filling out first modal form
    })
    managePage.modalPage().should('be.visible')
    cy.log('Filling out second modal form')

    cy.wait(8000);
    cy.enter('iframe[id="myIframe"]').then(getBody => {
      cy.log('Filling out second modal form')
      getBody().find(modalPage.recordingCallDrpdwn()).should('be.visible').select('string:ALLFORCE')
      getBody().find(modalPage.recordingCallDrpdwn()).invoke('val').should('eq', 'string:ALLFORCE')
      getBody().find(modalPage.btnNext()).click()                                           // Filling out second modal form
    })

    cy.wait(6000);
    cy.enter('iframe[id="myIframe"]').then(getBody => {
      cy.log('Filling out third modal form')
      getBody().find(modalPage.btnNext()).click()                                           // Filling out third modal form
    })

    cy.wait(6000);
    cy.enter('iframe[id="myIframe"]').then(getBody => {
      cy.log('Filling out fourth modal form')
      getBody().find(modalPage.btnNext()).click()                                           // Filling out fourth modal form

    })

    cy.wait(6000);
    cy.enter('iframe[id="myIframe"]').then(getBody => {
      cy.log('Filling out fifth modal form')
      getBody().find(modalPage.dropDownDAM()).should('be.visible').select("string:0")
      getBody().find(modalPage.dropDownDAM()).invoke('val').should('eq', 'string:0')
      getBody().find(modalPage.btnNext()).click()                                           // Filling out fifth modal form

    })

    cy.wait(6000);
    cy.enter('iframe[id="myIframe"]').then(getBody => {
      cy.log('Filling out sixth modal form')
      getBody().find(modalPage.dropDownLclCallTimes()).should('be.visible').select("string:1")
      getBody().find(modalPage.dropDownLclCallTimes()).invoke('val').should('eq', 'string:1')
      getBody().find(modalPage.btnNext()).click()                                           // Filling out sixth modal form
    })

    cy.wait(6000);
    cy.enter('iframe[id="myIframe"]').then(getBody => {
      cy.log('Filling out seventh modal form')
      getBody().find(modalPage.btnNext()).click()                                           // Filling out seventh modal form
    })

    cy.wait(7000);
    cy.enter('iframe[id="myIframe"]').then(getBody => {
      cy.log('Filling out eighth modal form')
      getBody().find(modalPage.tableAvailableAgents()).should('be.visible')                 
      getBody().find(modalPage.tableAvailableAgents()).select('user for testing different stuff')                                                                       // Why does value change?
      getBody().find(modalPage.btnMoveItem()).eq(2).click()
      getBody().find(modalPage.btnNext()).click()                                           // Filling out eighth modal form
    })
    
    cy.wait(6000);
    cy.enter('iframe[id="myIframe"]').then(getBody => {
      cy.log('Filling out nineth modal form')
      getBody().find(modalPage.dropDownHopperLvl()).should('be.visible').select("string:15")
      getBody().find(modalPage.dropDownHopperLvl()).should('have.value', "string:15")
      getBody().find(modalPage.btnNext()).click()                                           // Filling out nineth modal form
    })

    cy.wait(8000)
    managePage.modalPage().should('not.exist')
    cy.url().should('include', 'view#/CampaignGeneral')
    campaignGeneralPage.inputCampaignName().should('be.visible').and('have.value', campaignName)
    campaignGeneralPage.selectCampaignType().should('be.visible').and('have.value', "string:0")
    campaignGeneralPage.buttonToggle().contains('Active').should('be.visible')})
})