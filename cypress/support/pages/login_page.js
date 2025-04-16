/// <reference types="cypress" />

//Elementos
const pagina_login = '.account_form > h3'

//Inputs
const user_email_input = '#user'
const user_password_input = '#password'

//Botões
const btn_login = '#btnLogin'
const btn_lembrar = '#materialUnchecked'

//Mensagens
const msg_welcome = '#swal2-html-container'
const msg_error = '.invalid_input'

//Açoes


export default {
    checarPagina(mensagem) {
        cy.get(pagina_login)
            .should('be.visible')
            .should('have.text', mensagem)   
    },

    //Preencher
    preencherCampoEmail(email) {
        cy.get(user_email_input)
            .should('be.visible')
            .type(email)
            .should('have.value', email)
    }, 
    preencherCampoSenha(senha) {
        cy.get(user_password_input)
            .should('be.visible')
            .type(senha)
            .should('have.value', senha)
    },
    //Clicks
    clicarBotaoLogin() {
        cy.get(btn_login)
            .should('be.visible')
            .click()
    },
    clicarBotaoLembrar() {
        cy.get(btn_lembrar)
            .should('be.visible')
            .should('not.be.checked')
            .click()
    },
    //Verificar mensagens
    verificarLoginComSucesso(mensagem, email) {
        cy.get('.swal2-title')
            .should('be.visible')
            .should('have.text', mensagem)
        cy.get(msg_welcome)
        .should('be.visible')
        .should('have.text', `Olá, ${email}`)  
    },
    verificarLoginComFalha(mensagem) {
        cy.get(msg_error)
            .should('be.visible')
            .should('have.text', mensagem)
    },
}