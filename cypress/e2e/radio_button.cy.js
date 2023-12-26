describe("Testando elementos na demoqa", () => {
  it("Abrir o site", () => {
    cy.visit("https://demoqa.com/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(1) > :nth-child(1) > .avatar > svg > path").click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click();
    cy.get(':nth-child(2) > .custom-control-label').click();
    cy.get('#yesRadio').check();
    cy.get(':nth-child(3) > .custom-control-label').click();
    cy.get('#impressiveRadio').check();
    cy.get(':nth-child(2) > .custom-control-label').click();
    cy.get('#yesRadio').check();
    /* ==== End Cypress Studio ==== */
  });
});
