class conManagePage{
    managePage ={
        searchInput: () => cy.get('input[ng-model="inputValue"]'),
        headerSearchCampaign: () => cy.get('h1').eq(0),
        buttonAddCampaign: () => cy.get("button[ng-click='createBox(1)']"),
        modalPage: () => cy.get('iframe[id="myIframe"]'),
    }    
}
module.exports = new conManagePage()