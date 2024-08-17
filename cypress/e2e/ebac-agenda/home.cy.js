/// <reference types="cypress" />

describe("Testes para a página de agenda de contatos", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })

    it("Deve preencher o formulário", () => {
        cy.get('input[type="text"]').type("Lorenzo Gutierrez")
        cy.get('input[type="email"]').type("LorenzoGutierrez@gmail.com")
        cy.get('input[type="tel"]').type("55 996859492")
        cy.contains("Adicionar").click()
        cy.screenshot("teste-incluir")
    })

    // Alterar
    it("Deve alterar o formulário já preenchido", () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click()
        cy.get('input[type="text"]').clear().type("victor Santos")
        cy.get('input[type="email"]').clear().type("victor@gmail.com")
        cy.get('input[type="tel"]').clear().type("52 9964558792")
        cy.get(".alterar").click()
        cy.screenshot("teste-editar")
    })

    it("Deve remover o contato", () => {
        cy.get(":nth-child(3) > .sc-gueYoa > .delete").click()
        cy.screenshot("teste-remover")
    })
})
