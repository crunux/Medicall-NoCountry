
describe('Test Login', () => {
  it('login in app', () => {
    cy.visit('/')
    cy.contains('h1', 'Consulta con tu medico preferido nunca fue tan facil.')
    cy.contains('button', 'Consulta Ahora.!')
    cy.get('a').contains('Login').click()
    cy.location('pathname', {timeout: 2000}).should('include', '/login')
    //cy.url().should('include', '/login')
    cy.contains('h2', 'Login')
    cy.contains('p', 'consulta de manera mas rapida y de forma virtual')
    cy.get('input[type=email]').type('joancruz0502@hotmail.com')
    cy.get('input[type=password]').type('12345678')
    cy.get('button[name=ingresar]').click()
    cy.location('pathname', {timeout: 2000}).should('include', '/profile')
    // cy.url().should('include', '/profile')
  })
})