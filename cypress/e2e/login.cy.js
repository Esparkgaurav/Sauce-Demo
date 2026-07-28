
describe('Login', () => {
  it('should login with valid credentials', () => {
    cy.fixture('user').then((user) => {
      cy.login(user.username, user.password);
      cy.contains('Products').should('be.visible');
    });
  });
});