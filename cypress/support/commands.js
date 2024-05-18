// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('Salahemail', () => { 
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Yudha')
    cy.get('#LastName').type('dayut')
    cy.get('#Email').type('Dayut#gmail.com')
    cy.get('#Password').type('1234567')
    cy.get('#ConfirmPassword').type('1234567')
    cy.get('#register-button').click()
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })