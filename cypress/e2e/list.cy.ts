describe('List', () => {
  it('Open the registration page only if the first user is logged', () => {
    cy.login('angular1', 'project1')
    cy.url().should('includes', 'list')
    cy.get('app-navbar [data-cy = "registration-button"]').click();
    cy.url().should('includes', 'registration')
  })

  it('Stay on the list page if the user click on the button list-student', () => {
    cy.login('angular1', 'project1')
    cy.url().should('includes', 'list')
    cy.get('app-navbar [data-cy = "list-button"]').click();
    cy.url().should('includes', 'list')
  })

  it('Logout if the user click on the logout button from the list page', () => {
    cy.login('angular1', 'project1')
    cy.url().should('includes', 'list')
    cy.get('app-navbar [data-cy = "logout-button"]').click();
    cy.url().should('includes', 'login')
    cy.login('angular2', 'project2')
    cy.url().should('includes', 'list')
    cy.get('app-navbar [data-cy = "logout-button"]').click();
    cy.url().should('includes', 'login')
  })


  it('Block the registration page if the first user is not logged', () => {
    cy.login('angular2', 'project2')
    cy.url().should('includes', 'list')
    cy.get('app-navbar [data-cy = "registration-button"]').click();
    cy.url().should('includes', 'list')
  })
})
