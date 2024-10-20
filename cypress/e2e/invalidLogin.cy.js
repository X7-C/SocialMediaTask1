describe('Invalid Login Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('User cannot log in with invalid credentials', () => {
    cy.login('urwronghaha@stud.noroff.no', 'urwrongxd');
  });
});
