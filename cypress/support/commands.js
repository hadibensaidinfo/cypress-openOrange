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

/**
 * Cette fonction permet d'ouvrir le navigateur.
 * @example cy.OpenBrowser().
 */
Cypress.Commands.add("OpenBrowser",() =>{
    cy.step('Ouvrir Le Navigateur')
    cy.visit("/");
    cy.url().should('include','web/index.php/auth/login')
    cy.get('.orangehrm-login-slot').should('be.visible',{setTimeout:5000})
})