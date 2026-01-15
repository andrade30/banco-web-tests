describe('Login', () => {

  beforeEach(() => {
    cy.visit('/')
    // cy.visit(Cypress.env('URL'))
  });

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    cy.fazerLogin();

    cy.contains('h4', 'Realizar Transferência')
      .should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    cy.fazerLogincomCredenciaisInvalidas()

    cy.verificarMensagemNoToast('Erro no login. Tente novamente.');
  });
})