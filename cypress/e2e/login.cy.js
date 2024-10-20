describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('User can log in with valid credentials', () => {
    cy.login('makbat00180@stud.noroff.no', 'Tester1234');
  });
});
