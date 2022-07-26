describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://demo.realworld.io/#/register");
    cy.onLoginPage((cy) => {
      cy.findByPlaceholderText("Username").type("foobar");
      cy.findByPlaceholderText("Email").type("foobar@example.com");
      cy.findByPlaceholderText("Password").type("Pass1234");
      cy.showmessage("Hello from context");
    });
  });
});
