/// <reference types="cypress" />

import user_data from "./commons_page"

//Elementos da página de cadastro de usuário
const cadastro_usuario_page = '.account_form > h3'

//Inputs
const user_name_input = '#user'
const user_email_input = '#email'
const user_password_input = '#password'

//Botões
const btn_register = '#btnRegister'

//Mensagens
const msg_success = '#swal2-title'
const msg_welcome = '#swal2-html-container'
const msg_error = '#errorMessageFirstName'

//Açoes
export default {
    checarCadastroUsuario(mensagem) {
        cy.get(cadastro_usuario_page)
            .should('be.visible')
            .should('have.text', mensagem)   
    },
    preencherCampoNome(nome) {
        cy.get(user_name_input)
            .should('be.visible')
            .type(nome)
            .should('have.value', nome)
    },
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
    clicarBotaoCadastrar() {
        cy.get(btn_register)
            .should('be.visible')
            .click()
    },
    verificarCadastroComSucesso(mensagem, nome) {
     cy.get(msg_success)
        .should('be.visible')
        .should('have.text', mensagem)  
    cy.get(msg_welcome)
        .should('be.visible')
        .should('have.text', `Bem-vindo ${nome}`)  
    },
    verificarMensagemErro(mensagem) {
        cy.get(msg_error)
            .should('be.visible')
            .should('have.text', mensagem)
    }
}