/// <reference types="cypress" />

import { user_data } from "./commons_page"

//Elementos da página de cadastro de usuário
//Inputs
const user_name_input = '#user'
const user_email_input = '#email'
const user_password_input = '#password'

//Botões
const btn_register = '#btnRegister'

//Mensagens
const msg_success = '#swal2-title'
const msg_welcome = '#swal2-html-container'

//Açoes
export default {
    preencherCampoNome() {
        cy.get(user_name_input)
            .should('be.visible')
            .type(user_data.user_name)
            .should('have.value', user_data.user_name)
    },

    preencherCampoEmail() {
        cy.get(user_email_input)
            .should('be.visible')
            .type(user_data.user_email)
            .should('have.value',user_data.user_email)
    },

    preencherCampoSenhaValida() {
        cy.get(user_password_input)
            .should('be.visible')
            .type(user_data.user_password_valid)
            .should('have.value', user_data.user_password_valid)
    },

    preencherCampoSenhaInvalida() {
        cy.get(user_password_input)
            .should('be.visible')
            .type(user_data.user_password_invalid)
            .should('have.value', user_data.user_password_invalid)
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
        .should('have.text', `Bem-vindo ${user_data.user_name}`)  
    }
}