Cypress.Commands.add('login', (email, password) => {
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
    .type(email, { delay: 100 });
  cy.get('#loginPassword').should('be.visible').type(password, { delay: 100 });
  cy.get('#loginForm').submit();
});
