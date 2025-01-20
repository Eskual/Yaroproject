class conMainPage{
    elements ={
        inputLogin : () => cy.get('input[id="username"]'),
        inputPassword : () => cy.get('input[id="password"]'),
        btnSignIn: () => cy.get('input[class="signin-btn bg-submit"]'),
        modalPopUp: () => cy.get('div[id="warningModal"] > div > div[class=modal-content]'),
        btnClose: () => cy.get("div[id='warningModal'] > div > div > div> button").eq(2),
        dropbarMyEmail: () => cy.get('a[data-toggle = "dropdown"]').eq(10),
        dropbarCallCenter: () => cy.get('a[role = "button"]').eq(1),
    }    
}
module.exports = new conMainPage();