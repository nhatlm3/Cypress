const { expect } = require("chai");

describe('login api testing', () => {
  it('login - POST', () => {
      cy.request('/api/login',{email: 'nhatlm@gmail.com', password: '12345'}).as('loginRequest');
      cy.get('@loginRequest').then(todos => {
          expect(todos.status).to.eq(200);
          cy.wrap(todos.body).should('deep.include', {
            email: 'nhatlm@gmail.com',
            password: '12345'
          })
      });
  });
});