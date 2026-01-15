Cypress.Commands.add('fazerLogin', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').type(credenciais.valida.usuario)
        cy.get('#senha').type(credenciais.valida.senha)
    })
    cy.contains('Entrar')
        .should('be.visible')
        .click();
})

Cypress.Commands.add('fazerLogincomCredenciaisInvalidas', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').type(credenciais.invalida.usuario)
        cy.get('#senha').type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar')
        .should('be.visible')
        .click();
})