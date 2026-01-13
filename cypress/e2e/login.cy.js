describe('Login', () => {
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.visit('http://localhost:4000')

    cy.get('#username').type('julio.lima')
    cy.get('#senha').type('123456')

    cy.contains('Entrar')
      .should('be.visible')
      .click();

    cy.contains('h4', 'Realizar Transferência')
      .should('be.visible')
  })
})