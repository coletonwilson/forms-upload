// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')

    cy.get('#household_income').type('30001')
    cy.get('#dependent_age').type('5')
    cy.get('#single_parent').click()
    cy.get('#submit').click()
    cy.contains('Form: b202')
    cy.contains('Coverage Percentage: 60')
  })
})
