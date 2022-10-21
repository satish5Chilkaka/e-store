describe('Test spec', () => {
  it('passes', () => {

    cy.visit('http://localhost:4200/')
    cy.get('#studentName').should('be.visible')
      .should('exist')
      .type('Jane')

    cy.get('#addStudentName').should('be.visible')
      .should('exist')
      .click()
    cy.get('#studentName').invoke('val').then((val) => {
      expect(val).to.equal('Jane')

    })

  })
})
