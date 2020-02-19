describe("Smoke tests", () => {
  it("Works", () => {
    cy.visit("/");
    cy.server();
    cy.get("h1").contains("Welcome to nginx demo page!");
  });

  it("Fails", () => {
    cy.visit("/");
    cy.server();
    cy.get("h1").contains("FOO!");
  });
});
