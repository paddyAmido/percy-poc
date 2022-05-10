import '@percy/cypress';

describe('Does my UI match', () => {
    it('what does google look like today', () => {
      cy.visit('https://www.yahoo.com');
      expect(true).to.equal(true)
      // Take a snapshot for visual diffing
      cy.percySnapshot('google snap shot');
    })
  })