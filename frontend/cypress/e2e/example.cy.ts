// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/login')
    cy.contains('h2', 'Login')

    // cy.contains('h1', 'Consulta con tu medico preferido nunca fue tan facil.')
  })
})
