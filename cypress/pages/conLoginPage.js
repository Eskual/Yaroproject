class conLoginPage{
    loginPage ={
        inputLogin : () => cy.get('input[id="username"]'),
        inputPassword : () => cy.get('input[id="password"]'),
        btnSignIn: () => cy.get('input[class="signin-btn bg-submit"]'),
    }    
}
module.exports = new conLoginPage();