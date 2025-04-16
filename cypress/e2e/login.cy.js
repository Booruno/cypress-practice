/// <reference types="cypress" />
import home_page from "../support/pages/home_page"
import user_data from "../support/pages/commons_page"
import login_page from "../support/pages/login_page"
let dados = user_data.user_data()


beforeEach(() => {
    home_page.acessarHomePage()
    home_page.acessarPaginaLogin()
    login_page.checarPagina('Login')
})


describe('Login', () => {
    it.only('Login com sucesso', () => {
        login_page.preencherCampoEmail(dados.user_email_valid)
        login_page.preencherCampoSenha(dados.user_password_valid)
        login_page.clicarBotaoLembrar()
        login_page.clicarBotaoLogin()
        login_page.verificarLoginComSucesso('Login realizado' , dados.user_email_valid)
    })
    it('Login com email vazio', () => {
        login_page.preencherCampoSenha(dados.user_password_valid)
        login_page.clicarBotaoLogin()
        login_page.verificarLoginComFalha('E-mail inválido.')
    })
    it('Login com email inválido', () => {
        login_page.preencherCampoEmail('bruno.com')
        login_page.preencherCampoSenha(dados.user_password_valid)
        login_page.clicarBotaoLogin()
        login_page.verificarLoginComFalha('E-mail inválido.')
    })
    it('Login com senha vazia', () => {
        login_page.preencherCampoEmail(dados.user_email_valid)
        login_page.clicarBotaoLogin()
        login_page.verificarLoginComFalha('Senha inválida.')
    })
    it('Login com senha inválida', () => {
        login_page.preencherCampoEmail(dados.user_email_valid)
        login_page.preencherCampoSenha('123')
        login_page.clicarBotaoLogin()
        login_page.verificarLoginComFalha('Senha inválida.')
    })
})