describe('Cadastro', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  })

  it('Deve permitir iniciar o cadastro de um novo usuário', () => {
    cy.get('[data-qa="signup-name"]').type('usuarioteste')
    cy.get('[data-qa="signup-email"]').type('emailteste@123.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.wait(1000)
    cy.get(
      ':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]'
    ).click()
    cy.get('[data-qa="password"]').type('senha123')
    cy.get('[data-qa="days"]').select('10')
    cy.get('[data-qa="months"]').select('May')
    cy.get('[data-qa="years"]').select('1990')
    cy.get('[name="newsletter"]').click()
    cy.get('[name="optin"]').click()
    cy.get('[data-qa="first_name"]').type('Usuario')
    cy.get('[data-qa="last_name"]').type('Teste')
    cy.get('[data-qa="company"]').type('Empresa Teste')
    cy.get('[data-qa="address"]').type('Rua Teste, 123')
    cy.get('[data-qa="address2"]').type('Casa 456')
    cy.get('[data-qa="country"]').select('Portugal')
    cy.get('[data-qa="state"]').type('Estado Teste')
    cy.get('[data-qa="city"]').type('Cidade Teste')
    cy.get('[data-qa="zipcode"]').type('12345')
    cy.get('[data-qa="mobile_number"]').type('+5581999999999')
    cy.get('[data-qa="create-account"]').click()
  })
})
