
describe('Login', () => {
  it('should login with valid credentials', () => {
    cy.fixture('user').then((user) => {
      cy.login(user.standardUser.username, user.standardUser.password);
      cy.contains('Products').should('be.visible');
    });
  });
});