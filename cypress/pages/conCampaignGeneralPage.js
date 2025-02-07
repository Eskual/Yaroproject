class conCampaignGeneralPage{
    campaignGeneralPage ={
        inputCampaignName: () => cy.get('input[name="form[\'name\']"]'),
        selectCampaignType: () => cy.get('select[name="form[\'campaign_type\']"]'),
        buttonToggle: () => cy.get('div>span')
    }    
}
module.exports = new conCampaignGeneralPage()