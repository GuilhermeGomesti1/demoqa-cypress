describe("Testando elementos na demoqa", () => {
  it("Abrir o site", () => {
    cy.visit("https://demoqa.com/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(1) > :nth-child(1) > .avatar > svg > path").click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio-- TEXT BOX ==== */
    cy.get(":nth-child(1) > .element-list > .menu-list > #item-0").click();
    cy.get("#userName").clear("G");
    cy.get("#userName").type("Guilherme Gomes");
    cy.get("#userEmail").clear();
    cy.get("#userEmail").type("teste@teste.com");
    cy.get("#submit").click();
    /* ==== End Cypress Studio ==== */
  });
});
