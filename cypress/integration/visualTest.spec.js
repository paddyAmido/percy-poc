import '@percy/cypress';

describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit('https://www.thegymgroup.com/join-now/find-your-gym/');
      expect(true).to.equal(true)
      // Take a snapshot for visual diffing
      cy.percySnapshot('Find a gym');
    })
  })