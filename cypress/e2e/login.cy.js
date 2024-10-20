describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('User can log in with valid credentials', () => {
    cy.get('div.modal')
      .should('be.visible')
      .then((modal) => {
        cy.wrap(modal)
          .find('button[data-bs-dismiss="modal"]')
          .first()
          .click({ force: true });
      });

    cy.wait(500);
    cy.get('button[data-auth="login"]')
      .filter((index, button) => {
        return button.innerText.trim() === 'Login';
      })
      .first()
      .click({ force: true });

    cy.wait(500);
    cy.get('#loginEmail', { timeout: 8000 })
      .should('be.visible')
      .type('makbat00180@stud.noroff.no', { delay: 100 });

    cy.get('#loginPassword')
      .should('be.visible')
      .type('Tester1234', { delay: 100 });

    cy.get('#loginForm').submit();
  });
});
