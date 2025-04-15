/// <reference types="cypress" />

import home_page from '../support/pages/home_page'

beforeEach(() => {
    home_page.acessarHomePage()
    home_page.acessarPaginaLogin()
})

describe('Login', () => {
    it('Login com sucesso', () => {
    })
})