describe('Login form', () => {
  beforeEach(() => {
    cy.visit('/').get('a[href*="login"]').click()
    cy.url().should('include', 'login').get('button').click()
        .get('#email')
          .type("nhatlm@icd-vn.com")
        .get('#password')
          .type('1234Admin')
  })
  it('should checked remember login page', () => {
    cy.get('[type="checkbox"]')
      .check()
    cy.get('#email').should('have.value', 'nhatlm@icd-vn.com');
    cy.get('#password').should('have.value', '1234Admin');
    cy.get('[type="checkbox"]').should('be.checked');
  })

  it('should uncheck remember login page', () => {
    //Check value is exist
    cy.get('#email').should('have.value', 'nhatlm@icd-vn.com');
    cy.get('#password').should('have.value', '1234Admin');
    cy.get('[type="checkbox"]').should('not.be.checked');
  })
  it('should checked remember submit login page', () => {
    cy.get('[type="checkbox"]')
      .check()
    cy.get('[type="submit"]').click()
  })

  // it('should uncheck remember and submit login page', () => {
  //    cy.get('form').submit()
  // })
})
