const sName = Cypress.env('userName')
describe('Test spec', () => {
    it('passes', () => {
        expect(Cypress.env())
            .to.be.an('object')
            .and.to.include.keys('person')
        cy.visit('http://localhost:4200/')
        cy.get('#studentName').should('be.visible')
            .should('exist')
            //.type('Jane')
            .type(Cypress.env('person').userName)
        cy.get('#addStudentName').should('be.visible')
            .should('exist')
            .click()
        cy.get('#studentName').invoke('val').then((val) => {
            expect(val).to.equal('Jane')

        })

    })
})

// {
//   "person": {
//     "userName": "Jane"
//   }
// }