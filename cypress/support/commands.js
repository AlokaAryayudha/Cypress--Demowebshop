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
Cypress.Commands.add('Salahemail', (useremail,userpassword) => { 
    cy.get('.ico-register').click()
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Yudha')
    cy.get('#LastName').type('dayut')
    cy.get('#Email').type('useremail')
    cy.get('#Password').type('userpassword')
    cy.get('#ConfirmPassword').type('userpassword')
    cy.get('#register-button').click()
})
Cypress.Commands.add('ketikelement', (element,emailnya) => { 
    cy.get(element)
    .should('be.visible')
    .clear()
    .type(emailnya)
})

Cypress.Commands.add('verivikasi', (element,textsalah) => { 
    cy.get(element)
    .should('contain.text',textsalah)
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