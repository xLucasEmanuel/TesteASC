describe('Pesquisa e carrinho', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type('emailteste@123.com')
    cy.get('[data-qa="login-password"]').type('senha123')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as').should('be.visible')
  })

  it('Deve pesquisar um produto e adicionar ao carrinho', () => {
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('[name="search"]').type('Tshirt')
    cy.get('[id="submit_search"]').click()
    cy.get(
      ':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'
    ).click()
    cy.get('.modal-footer > .btn').click()
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    cy.contains('Men Tshirt').should('be.visible')
  })
})
