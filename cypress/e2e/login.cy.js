// Enter email and password
// submit the form
// check if token is saved in localStorage

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('User can log in with valid credentials', () => {
    cy.get('#loginEmail').type('makbat00180@stud.noroff.no', { delay: 100 });
    cy.get('#loginPassword').type('Tester1234', { delay: 100 });
    cy.get('#loginForm').submit();
  });
});
