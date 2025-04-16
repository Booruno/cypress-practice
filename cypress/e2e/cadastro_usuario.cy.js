/// <reference types="cypress" />
import home_page from "../support/pages/home_page"
import cadastro_usuario_page from "../support/pages/cadastro_usuarios_page"
import user_data from "../support/pages/commons_page"
let dados = user_data.user_data()


beforeEach(() => {
    home_page.acessarHomePage()
    home_page.acessarPaginaCadastroUsuario()
    cadastro_usuario_page.checarCadastroUsuario('Cadastro de usuário')
})

describe('Cadastro de usuário', () => {
    it('Cadastro com sucesso', () => {
        cadastro_usuario_page.preencherCampoNome(dados.user_name)
        cadastro_usuario_page.preencherCampoEmail(dados.user_email_valid)
        cadastro_usuario_page.preencherCampoSenha(dados.user_password_valid)
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarCadastroComSucesso('Cadastro realizado!', dados.user_name)
    })

    it('Campo nome vazio', () => {
        cadastro_usuario_page.preencherCampoEmail(dados.user_email_valid)
        cadastro_usuario_page.preencherCampoSenha(dados.user_password_valid)
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo e-mail inválido', () => {
        cadastro_usuario_page.preencherCampoNome(dados.user_name)
        cadastro_usuario_page.preencherCampoEmail(dados.user_email_invalid)
        cadastro_usuario_page.preencherCampoSenha(dados.user_password_invalid)
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo e-mail vazio', () => {
        cadastro_usuario_page.preencherCampoNome(dados.user_name)
        cadastro_usuario_page.preencherCampoSenha(dados.user_password_valid)
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazio', () => {
        cadastro_usuario_page.preencherCampoNome(dados.user_name)
        cadastro_usuario_page.preencherCampoEmail(dados.user_email_valid)
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })
    it('Campo senha inválida', () => {
        cadastro_usuario_page.preencherCampoNome(dados.user_name)
        cadastro_usuario_page.preencherCampoEmail(dados.user_email_valid)
        cadastro_usuario_page.preencherCampoSenha(dados.user_password_invalid)
        cadastro_usuario_page.clicarBotaoCadastrar()
        cadastro_usuario_page.verificarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })
})