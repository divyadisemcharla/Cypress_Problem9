describe('My First Test', function()  {
  before(function(){
    cy.fixture('examplefixture.json').then(function(data)
    {
       this.data=data
    })
  })
  it('Problem9_Cases', function()  {
    cy.visit("https://automationpanda.com/2021/12/29/want-to-practice-test-automation-try-these-demo-sites/");
    cy.title().should('eq', this.data.title)  // CASE A
    cy.get('#menu-item-10593 > a').click();
    cy.title().should('eq', this.data.speakingtitle)  // CASE B
    cy.get('.entry-content > :nth-child(2)').then(($el) => {
      if ($el.length) {
      // Element exists, verify text
      cy.contains(this.data.Keynote);            // CASE C
      } else {
      // Element does not exist, do something else
      }
      })
  })
})