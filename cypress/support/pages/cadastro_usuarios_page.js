/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const user_name = faker.person.firstName() + " " + faker.person.lastName()
const user_email = faker.internet.email(user_name)
const user_password_valid = faker.internet.password(8, false, /[a-zA-Z0-9]/)
const user_password_invalid = faker.internet.password(5, false, /[a-zA-Z0-9]/)


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
            .type(user_name)
            .should('have.value', user_name)
    },

    preencherCampoEmail() {
        cy.get(user_email_input)
            .should('be.visible')
            .type(user_email)
            .should('have.value', user_email)
    },

    preencherCampoSenhaValida() {
        cy.get(user_password_input)
            .should('be.visible')
            .type(user_password_valid)
            .should('have.value', user_password_valid)
    },

    preencherCampoSenhaInvalida() {
        cy.get(user_password_input)
            .should('be.visible')
            .type(user_password_invalid)
            .should('have.value', user_password_invalid)
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
        .should('have.text', `Bem-vindo ${user_name}`)  
    }
}