import { mount } from "cypress/angular"
import { E2eTestComponent } from "src/app/e2e-test/e2e-test.component"

import { ItemsComponent } from "src/app/basics/items/items.component"
import { StudentsComponent } from "src/app/basics/students/students.component"

describe('component', () => {
  it('student component', () => {
    mount(StudentsComponent)

    cy.contains('Student not yet created').should('be.visible')

  })
  it('Items component', () => {
    mount(ItemsComponent)
    cy.contains('Item name').should('be.visible')
  })
  it('student component', () => {
    mount(E2eTestComponent)
    cy.contains('Student not yet created').should('be.visible')
  })
})