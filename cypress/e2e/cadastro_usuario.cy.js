/// <reference types="cypress" />
import home_page from "../support/pages/home_page"
import cadastro_usuario_page from "../support/pages/cadastro_usuarios_page"

beforeEach(() => {
    home_page.acessarHomePage()
    home_page.acessarPaginaCadastroUsuario()
})

describe('Cadastro de usuário', () => {
    it('Cadastro com sucesso', () => {
        cadastro_usuario_page.preencherCampoNome()
        cadastro_usuario_page.preencherCampoEmail()
        cadastro_usuario_page.preencherCampoSenhaValida()
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarCadastroComSucesso()
    })

    it('Campo nome vazio', () => {
    })

    it('Campo e-mail inválido', () => {
    })

    it('Campo e-mail vazio', () => {
    })

    it('Campo senha vazio', () => {
    })
    it('Campo senha inválida', () => {
    })
})