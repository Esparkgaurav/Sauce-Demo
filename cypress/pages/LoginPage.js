class LoginPage {

    visit(){
        cy.visit("/");
    }

    enterusername(username){
        cy.get('#user-name').type(username);
    }

    enterpassword(password){
        cy.get('#password').type(password);
    }

    clickbtn(){
        cy.get('#login-button').click();
    }
}

export default LoginPage;