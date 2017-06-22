describe('app', () => {
  it('should load', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').should('have.text', 'Pokemon Search');
  });

  it('should search', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input').type('bulb');
    cy.get('img').should('have.length', 15);

    cy.get('input').clear().type('pika');
    cy.get('input').clear();
    cy.get('img').should('have.length', 0);
  })
});
