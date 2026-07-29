describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  })

  it('Deve impedir login quando a senha não for preenchida', () => {
    cy.get('[data-qa="login-email"]').type('usuario@email.com')
    cy.get('[data-qa="login-button"]').click()
    cy.get('[data-qa="login-password"]').then($input => {
      expect($input[0].validationMessage).to.eq('Preencha este campo.')
    })
  })

  it('Deve impedir login quando o email não for preenchido', () => {
    cy.get('[data-qa="login-password"]').type('senha123')
    cy.get('[data-qa="login-button"]').click()
    cy.get('[data-qa="login-email"]').then($input => {
      expect($input[0].validationMessage).to.eq('Preencha este campo.')
    })
  })

  it('Login com sucesso com email e senha válidos', () => {
    cy.get('[data-qa="login-email"]').type('emailteste@123.com')
    cy.get('[data-qa="login-password"]').type('senha123')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as').should('be.visible')
  })
})
