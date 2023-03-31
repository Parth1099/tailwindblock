const getComponentCard = (number) => {
  return cy.get(`[data-testid="card-${number}"]`);
};

describe("Testing home page", () => {
  beforeEach("Login", () => {
    cy.visit(Cypress.env("WEB_URL"));
  });

  it("Test 1", () => {
    cy.contains("UI elements that are beautifully Made with Tailwind CSS");
    cy.contains("By the Infynno Solutions");
    cy.contains("Components").click();
    getComponentCard(1).click();

    cy.wait(100);
    for (let index = 0; index < 18; index++) {
      getComponentCard(index).click();
      cy.wait(5000);
      cy.contains("404").should("not.exist");
      cy.contains("This page could not be found.").should("not.exist");
      cy.wait(3000);
      cy.go("back");
      cy.wait(3000);
    }
    cy.contains("Templates").click();
    cy.wait(100);
    cy.contains("Templates");
    cy.contains(
      "Here is a list of all free Template made with tailwind css and reactjs. Users can preview all views on a tablet, mobile, or desktop, and users can copy the code and paste it into their compiler. user can customize the code as well."
    );
    for (let index = 0; index < 4; index++) {
      getComponentCard(index).click();
      cy.wait(5000);
      cy.contains("404").should("not.exist");
      cy.contains("This page could not be found.").should("not.exist");
      cy.wait(5000);
      cy.go("back");
      cy.wait(5000);
    }
  });
});
