describe('Login API', () => {
  it('Deve realizar login com credenciais válidas', () => {
    cy.request({
      method: 'POST',
      url: '/api/verifyLogin',
      form: true,
      body: {
        email: 'emailteste@123.com',
        password: 'senha123'
      }
    }).then(response => {
      // Aqui estou validando o status da resposta.
      expect(response.status).to.eq(200)

      // Aqui é o parse do body da resposta, caso seja uma string, estou convertendo para JSON.
      const body =
        typeof response.body === 'string'
          ? JSON.parse(response.body)
          : response.body

      expect(body).to.have.property('responseCode', 200)
      expect(body).to.have.property('message')
    })
  })
})
