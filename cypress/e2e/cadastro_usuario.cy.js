/// <reference types="cypress" />
import home_page from "../support/pages/home_page"
import cadastro_usuario_page from "../support/pages/cadastro_usuarios_page"

beforeEach(() => {
    home_page.acessarHomePage()
    home_page.acessarPaginaCadastroUsuario()
    cadastro_usuario_page.checarCadastroUsuario()
})

describe('Cadastro de usuário', () => {
    it('Cadastro com sucesso', () => {
        cadastro_usuario_page.preencherCampoNome()
        cadastro_usuario_page.preencherCampoEmailValido()
        cadastro_usuario_page.preencherCampoSenhaValida()
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarCadastroComSucesso()
    })

    it('Campo nome vazio', () => {
        cadastro_usuario_page.preencherCampoEmailValido()
        cadastro_usuario_page.preencherCampoSenhaValida()
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarMensagemCampoNomeVazio()
    })

    it('Campo e-mail inválido', () => {
        cadastro_usuario_page.preencherCampoNome()
        cadastro_usuario_page.preencherCampoEmailInvalido()
        cadastro_usuario_page.preencherCampoSenhaValida()
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarMensagemCampoEmailInvalido()
    })

    it('Campo e-mail vazio', () => {
        cadastro_usuario_page.preencherCampoNome()
        cadastro_usuario_page.preencherCampoSenhaValida()
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarMensagemCampoEmailInvalido()
    })

    it('Campo senha vazio', () => {
        cadastro_usuario_page.preencherCampoNome()
        cadastro_usuario_page.preencherCampoEmailValido()
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarMensagemSenhaInvalida()
    })
    it('Campo senha inválida', () => {
        cadastro_usuario_page.preencherCampoNome()
        cadastro_usuario_page.preencherCampoEmailValido()
        cadastro_usuario_page.preencherCampoSenhaInvalida()
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarMensagemSenhaInvalida()
    })
})