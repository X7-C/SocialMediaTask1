describe('Logout Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
    cy.login('makbat00180@stud.noroff.no', 'Tester1234');
  });

  it('User can log out using the logout button', () => {
    cy.wait(2500);
    cy.get('button[data-auth="logout"]')
      .should('be.visible')
      .click({ force: true });
    cy.get('button[data-auth="login"]').should('be.visible');
  });
});
