describe('Registration', () => {
  it('Open the registration page if the user click on the button registration', () => {
    cy.login('angular1', 'project1')
    cy.url().should('includes', 'list')
    cy.get('app-navbar [data-cy = "registration-button"]').click();
    cy.url().should('includes', 'registration')
  })

  it('Open the list page if the user click on the button list-student', () => {
    cy.login('angular1', 'project1')
    cy.url().should('includes', 'list')
    cy.get('app-navbar [data-cy = "registration-button"]').click();
    cy.get('app-navbar [data-cy = "list-button"]').click();
    cy.url().should('includes', 'list')
  })

  it('Logout if the first user click on the logout button from the registration page', () => {
    cy.login('angular1', 'project1')
    cy.url().should('includes', 'list')
    cy.get('app-navbar [data-cy = "registration-button"]').click();
    cy.url().should('includes', 'registration')
    cy.get('app-navbar [data-cy = "logout-button"]').click();
    cy.url().should('includes', 'login')
  })

})
