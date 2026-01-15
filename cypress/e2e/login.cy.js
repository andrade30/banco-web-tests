describe('Login', () => {

  beforeEach(() => {
    cy.visit('/')
    // cy.visit(Cypress.env('URL'))
  });

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').type(credenciais.valida.usuario)
      cy.get('#senha').type(credenciais.valida.senha)
    })

    cy.contains('Entrar')
      .should('be.visible')
      .click();

    cy.contains('h4', 'Realizar Transferência')
      .should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').type(credenciais.invalida.usuario)
      cy.get('#senha').type(credenciais.invalida.senha)
    })

    cy.contains('button', 'Entrar')
      .should('be.visible')
      .click();

    cy.get('.toast')
      .should('have.text', 'Erro no login. Tente novamente.');
  });
})