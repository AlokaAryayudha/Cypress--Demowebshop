describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demowebshop.tricentis.com/register')
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('yudha')
    cy.get('#LastName').type('arya')
    cy.get('#Email').type('Dumdumdum@gmail.com')
    cy.get('#Password').type('123456')
    cy.get('#ConfirmPassword').type('123456')
    cy.get('#register-button').click()
    
   
  })
})