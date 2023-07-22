describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("/");
    cy.get("div.login").click();
  });
});

export {};
