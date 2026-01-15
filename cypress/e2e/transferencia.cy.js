describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLogin()
    })

    it('Deve transferir quando informo dados e valor validos', () => {
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '11');

        cy.verificarMensagemNoToast('Transferência realizada!')
    });

    it('Deve apresentar erro quando tentar transferir mais de 5 mil sem o token', () => {
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '6000');

        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    });
});