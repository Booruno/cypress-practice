/// <reference types="cypress" />

export default {

    acessarHomePage() {
        cy.visit('/')

    },
    acessarPaginaCadastroUsuario() {
        cy.get('.fa-lock')
        .should('be.visible')
                .click()
    },
    acessarPaginaLogin() {
        cy.get('.fa-user')
            .should('be.visible')
                .click()
    }
}