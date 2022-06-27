const { expect } = require("chai")
describe('Login form have username and password success', () => {
  beforeEach(() => {
    cy.visit('/').get('a[href*="login"]').click()
    cy.url().should('include', 'login').get('button').click()
    cy.get('#username')
        .type("nhatlm@icd-vn.com")
      .get('#password')
        .type('Nhat.123456')
  })

  it('should check value input ', () => {
    cy.get('#username').should('have.value', 'nhatlm@icd-vn.com');
    cy.get('#password').should('have.value', 'Nhat.123456');
  })

  it('should submit login success', () => {
    cy.get('[type="submit"]').click();
    cy.url().should('be.equal',`${Cypress.config("baseUrl")}`);
  })
})
describe('Login form have username and password failed', () => {
  beforeEach(() => {
    cy.visit('/').get('a[href*="login"]').click()
    cy.url().should('include', 'login').get('button').click()
  })

  it('should check value of username input is required', () => {
    cy.get('#password')
        .type('Nhat.123456')
    cy.get('input:invalid').should('have.length', 1);
  })
  
  it('should check value of password not match condition', () => {
    cy.get('#username')
      .type("nhatlm@icd-vn.com")
    cy.get('#password')
        .type('aaaaa')
    cy.get('#password').invoke('val').should('not.match', /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
  })

  // it('should submit login success', () => {
  //   cy.get('[type="submit"]').click();
  //   cy.url().should('be.equal',`${Cypress.config("baseUrl")}`);
  // })
})
