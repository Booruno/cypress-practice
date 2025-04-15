/// <reference types="cypress" />

import user_data from "./commons_page"

//Elementos da página de cadastro de usuário

let dados = user_data.user_data()
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
    
    checarCadastroUsuario() {
        cy.get(cadastro_usuario_page)
            .should('be.visible')
            .should('have.text', 'Cadastro de usuário')   
    },

    preencherCampoNome() {
        cy.get(user_name_input)
            .should('be.visible')
            .type(dados.user_name)
            .should('have.value', dados.user_name)
    },

    preencherCampoEmailValido() {
        cy.get(user_email_input)
            .should('be.visible')
            .type(dados.user_email_valid)
            .should('have.value',dados.user_email_valid)
    },

    preencherCampoEmailInvalido() {
        cy.get(user_email_input)
            .should('be.visible')
            .type(dados.user_email_invalid)
            .should('have.value',dados.user_email_invalid)
    },
    preencherCampoSenhaValida() {
        cy.get(user_password_input)
            .should('be.visible')
            .type(dados.user_password_valid)
            .should('have.value', dados.user_password_valid)
    },

    preencherCampoSenhaInvalida() {
        cy.get(user_password_input)
            .should('be.visible')
            .type(dados.user_password_invalid)
            .should('have.value', dados.user_password_invalid)
    },

    clicarBotaoCadastrar() {
        cy.get(btn_register)
            .should('be.visible')
            .click()
    },

    verificarCadastroComSucesso() {
     cy.get(msg_success)
        .should('be.visible')
        .should('have.text', 'Cadastro realizado!')  
    cy.get(msg_welcome)
        .should('be.visible')
        .should('have.text', `Bem-vindo ${dados.user_name}`)  
    },

    verificarMensagemCampoNomeVazio() {
        cy.get(msg_error)
            .should('be.visible')
            .should('have.text', 'O campo nome deve ser prenchido')
    },
    verificarMensagemCampoEmailInvalido() {
        cy.get(msg_error)
            .should('be.visible')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    },
    verificarMensagemSenhaInvalida() {
        cy.get(msg_error)
            .should('be.visible')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    },
}