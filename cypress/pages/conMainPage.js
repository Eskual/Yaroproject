class conMainPage{
    mainPage ={
        modalPopUp: () => cy.get('div[id="warningModal"] > div > div[class=modal-content]'),
        btnClose: () => cy.get("div[id='warningModal'] > div > div > div> button").eq(2),
        dropbarMyEmail: () => cy.get('a[data-toggle = "dropdown"]').eq(10),
        dropbarCallCenter: () => cy.get('a[role = "button"]').eq(1),
        btnCampaigns: () => cy.get("a[href='https://admin-dt.convoso.com/campaign']")
    }    
}
module.exports = new conMainPage()