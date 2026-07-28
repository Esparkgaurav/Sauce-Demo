// cypress/support/commands.js

import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('login', (username, password) => {
  
    const lp = new LoginPage();
    lp.visit();
    lp.enterusername(username);
    lp.enterpassword(password);
    lp.clickbtn();

});