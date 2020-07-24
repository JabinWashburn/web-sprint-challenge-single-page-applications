///<refrence types="Cypress" />

describe('Testing ordering app', () => {
    it('visits app', () => {
        cy.visit('http://localhost:3000')
    })
    it('types in name field', () => {
        cy.get('#name')
        .type('Jabin').should('have.value', 'Jabin')
    })
    it('should check boxes', () => {
        cy.get('#olive').check().should('be.checked')
        cy.get('#pep').check().should('be.checked')
        cy.get('#mushroom').check().should('be.checked')
        cy.get('#pine').check().should('be.checked')
        cy.get('#troll').check().should('be.checked')
    })
    it('can submit order', () => {
        cy.get('#order').click()
    })
})